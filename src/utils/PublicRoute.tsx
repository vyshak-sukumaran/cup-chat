import { getAuth } from "firebase/auth";
import {
  Navigate,
  Outlet
} from "react-router-dom";
import { firebaseApp } from "../services/firebase";
import { useAuthUser } from "@react-query-firebase/auth";



const PublicRoute = () => {
  const auth = getAuth(firebaseApp);
  const {data} = useAuthUser(["user"], auth)
  console.log(data);
  
  
  return data ? <Navigate replace to="/home" /> : <Outlet />
};

export default PublicRoute;
