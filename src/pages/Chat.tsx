import React, { useRef, useState, useEffect } from "react";
import IconButton from "../components/buttons/IconButton";
import Message from "../components/cards/Message";
import InputField from "../components/input/InputField";
import s from "./Chat.module.css";
import { ReactComponent as PlaneIcon } from "../assets/plane.svg";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import {
  addDoc,
  collection,
  doc,
  limit,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { firestore } from "../services/firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import useAuth from "../hooks/useAuth";

const Chat = () => {
  let [message, setMessage] = useState<string>("");

  const { id, room } = useParams();

  const bottomRef = useRef<HTMLDivElement>(null);

  const auth = useAuth();

  const uid = auth.currentUser?.uid;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (!message) return;

    const data = {
      message: message,
      timestamp: Timestamp.now(),
      room: doc(firestore, `/rooms/${id}`),
      uid,
    };
    try {
      const docRef = await addDoc(collection(firestore, "chats"), data);
      bottomRef.current?.scrollIntoView();
      setMessage("");
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.log("Error adding document:", error);
    }
  };

  const roomRef = doc(firestore, "rooms", `${id}`);

  const messageRef = collection(firestore, "chats");
  const q = query(
    messageRef,
    where("room", "==", roomRef),
    orderBy("timestamp"),
    limit(25)
  );

  const {
    data: snapShot,
    isLoading,
    isError,
  } = useFirestoreQuery(["chats", {id}], q, {
    subscribe: true,
    includeMetadataChanges: true,
  });

  useEffect(() => {
    if (!bottomRef.current) return;
    bottomRef.current?.scrollIntoView();
  }, []);

  if (isLoading) return <div>loading....</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <span>{room || "Room Name"}</span>
      </header>
      <div className={s.body}>
        <div className={s.messages}>
          {snapShot?.docs.map((doc) => {
            const data = doc.data();
            return (
              <Message
                key={doc.id}
                message={data.message}
                timestamp={data.timestamp}
                sender={uid === data.uid ? true : false}
              />
            );
          })}
          <div ref={bottomRef}></div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={s.footer}>
        <InputField
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <IconButton type="submit" filled>
          <PlaneIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default Chat;
