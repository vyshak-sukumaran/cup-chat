import { getAuth } from "firebase/auth"
import { firebaseApp } from "../services/firebase"


const useAuth = () => {
    const auth = getAuth(firebaseApp)
    return auth
}

export default useAuth