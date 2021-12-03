import { IonContent, IonPage, IonButton } from "@ionic/react";
import React, {useState} from "react";
import "./Profile.css"
import circle from "./Circle.png"
import { useHistory } from "react-router";
import { logoutUser } from "../../firebaseConfig";

const Profile: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
    const history = useHistory();
  
    async function logout() {
      setBusy(true);
      await logoutUser();
      setBusy(false);
      window.location.reload();
      history.replace("/login");
    }
  return (
    <div className="profile_page">
      <h1 className="profile_title">Your Profile</h1>
      <img className="profile_dot" src={circle}/>
       <IonButton expand="block" className="button-styling" onClick={async () => await logout()}>Logout</IonButton>
    </div>
  );
};

export default Profile;
