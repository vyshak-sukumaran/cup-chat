import { getAuth } from "firebase/auth";
import {
  Navigate,
  Outlet
} from "react-router-dom";
import { firebaseApp } from "../services/firebase";
import { useAuthUser } from "@react-query-firebase/auth";



const PrivateRoute = () => {
  const auth = getAuth(firebaseApp);
  const {data} = useAuthUser(["user"], auth)
  
  return data ? <Outlet /> : <Navigate replace to="/auth" />
};

export default PrivateRoute;
