import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { firebaseApp } from "../services/firebase";

interface ProviderProps {
  children: React.ReactNode;
}
interface ContextProps {
  currentUser: {};
  auth: {};
}

const AuthContext = React.createContext<ContextProps | undefined>(undefined);

const AuthProvider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = React.useState<{} | any>(null);

  const auth = getAuth(firebaseApp);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    console.log(currentUser);
  }, [currentUser, auth]);

  const contextData : ContextProps = {
    currentUser,
    auth,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
