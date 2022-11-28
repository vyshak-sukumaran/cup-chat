import s from "./Profile.module.css";
import Boy from "../assets/boy.png";
import { ReactComponent as EditIcon } from "../assets/pencil.svg";
import InputField from "../components/input/InputField";
import Button from "../components/buttons/Button";

const Profile = () => {

  return (
    <div className={s.wrapper}>
      <section className={s.avatarSection}>
        <figure className={s.mainAvatar}>
          <img src={Boy} alt="Avatar" />
          <figcaption className={s.uploadImage}>
            <EditIcon />
          </figcaption>
        </figure>
        <div className={s.avatarCollection}>
          <div className={s.singleAvatar}>
            <img src={Boy} alt="item" />
          </div>
          <div className={s.singleAvatar}>
            <img src={Boy} alt="item" />
          </div>
          <div className={s.singleAvatar}>
            <img src={Boy} alt="item" />
          </div>
          <div className={s.singleAvatar}>
            <img src={Boy} alt="item" />
          </div>
          <div className={s.singleAvatar}>
            <img src={Boy} alt="item" />
          </div>
          <div className={s.singleAvatar}>
            <img src={Boy} alt="item" />
          </div>
        </div>
      </section>
      <section className={s.detailsSection}>

        <InputField placeholder="Name" />

        <Button>Continue</Button>
      </section>
    </div>
  );
};

export default Profile;
