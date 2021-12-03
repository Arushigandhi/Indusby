import { IonContent, IonPage, IonButton, IonItem, IonLabel, IonCheckbox } from "@ionic/react";
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
      <img className="profile_dot" src={circle} alt=""/>
      <h1 className="profile_name">Arushi Gandhi</h1>
      <div className="checkbox_div">
            <IonLabel className="profile_question">Are you a researcher?</IonLabel>
            <IonCheckbox className="checkbox" />
          </div>
       <IonButton expand="block" className="button-styling" onClick={async () => await logout()}>Logout</IonButton>
    </div>
  );
};

export default Profile;
