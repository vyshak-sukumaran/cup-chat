import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import s from "./Root.module.css";
import Home from "./Home";
import Authentication from "./Authentication";
import Profile from "./Profile";
import Chat from "./Chat";
import PrivateRoute from "../utils/PrivateRoute";
import IconButton from "../components/buttons/IconButton";
import { ReactComponent as LogoutIcon } from "../assets/logout.svg";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../services/firebase";
import PublicRoute from "../utils/PublicRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import BackButton from "../components/buttons/BackButton";
import CreateRoom from "./CreateRoom";

const Root = () => {
  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signout = () => {
    signOut(auth);
  };

  const location = useLocation();

  const addRoom = () => navigate("/createroom");
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <span>Cup Chat</span>

          {user && (
            <>
              {location.pathname === "/home" ? (
                <div className={s.newRoom}>
                  <IconButton onClick={addRoom} filled>
                    <AddIcon />
                  </IconButton>
                </div>
              ) : (
                <div className={s.newRoom}>
                  <BackButton />
                </div>
              )}

              <div className={s.signOut}>
                <IconButton onClick={signout} filled>
                  <LogoutIcon />
                </IconButton>
              </div>
            </>
          )}
        </header>
        <main className={s.main}>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />

            <Route path="/auth" element={<PublicRoute />}>
              <Route path="/auth" element={<Authentication />} />
            </Route>

            <Route path="/home" element={<PrivateRoute />}>
              <Route index path="/home" element={<Home />} />
            </Route>
            <Route path="/Chat/:id/:room" element={<PrivateRoute />}>
              <Route path="/Chat/:id/:room" element={<Chat />} />
            </Route>

            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/createroom" element={<PrivateRoute />}>
              <Route path="/createroom" element={<CreateRoom />} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Root;
