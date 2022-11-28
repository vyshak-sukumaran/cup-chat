import s from "./Authentication.module.css";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { firebaseApp } from "../services/firebase";

const Authentication = () => {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  const signInWithGoogle = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithPopup(auth, provider)
    })
    .then(() => navigate("/home"))
    .catch((error) => {
      console.log("something went wrong", error);
      
    })
    
  };


  return (
    <div className={s.wrapper}>
      <button onClick={signInWithGoogle} className={s.googleLogin}>
        <GoogleIcon />
        <p>Continue with Google</p>
      </button>
      <div className={s.or}>Or</div>
      <div className={s.guestLogin}>
        <p>Be a guest</p>
      </div>
    </div>
  );
};

export default Authentication;
