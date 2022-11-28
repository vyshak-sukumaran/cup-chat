import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import InputField from "../components/input/InputField";
import useAuth from "../hooks/useAuth";
import { firestore } from "../services/firebase";
import s from "./CreateRoom.module.css";

const CreateRoom = () => {
  let [formData, setFormData] = useState<{ name: string; description: string }>(
    {
      name: "",
      description: "",
    }
  );
  const navigate = useNavigate()
  const auth = useAuth();

  const uid = auth.currentUser?.uid;
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!formData.name) return

    const data = {
        name: formData.name,
        description: formData.description,
        timestamp: Timestamp.now(),
        uid,
      };
      try {
        const docRef = await addDoc(collection(firestore, "rooms"), data);
        setFormData({name: "", description: ""});
        console.log("Document written with ID:", docRef.id);
        navigate("/home")
      } catch (error) {
        console.log("Error adding document:", error);
      }
  }
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <span>Create Room</span>
      </header>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={s.body}>
          <InputField
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
          <InputField
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;
