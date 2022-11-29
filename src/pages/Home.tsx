import RoomCard from "../components/cards/RoomCard";
import s from "./Home.module.css";
import { Link } from "react-router-dom";
import { collection, orderBy, query } from "firebase/firestore";
import { firestore } from "../services/firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { RoomSkeleton } from "../components/loading/Skelton";

const Home = () => {
  const ref = collection(firestore, "rooms");
  const q = query(ref, orderBy("timestamp", "desc"));
  const {
    data: snapShot,
    isLoading,
    isError,
  } = useFirestoreQuery(["rooms"], q, {
    subscribe: true,
    includeMetadataChanges: true,
  });

  if (isError) return <div>Error...</div>;

  return (
    <div className={s.wrapper}>
      {!isLoading ? (
        snapShot?.docs.map((doc) => {
          const data = doc.data();
          return (
            <Link
              key={doc.id}
              to={`/chat/${doc.id}/${data.name}`}
              className="link"
            >
              <RoomCard name={data.name} description={data.description} />
            </Link>
          );
        })
      ) : (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      )}
    </div>
  );
};

export default Home;
