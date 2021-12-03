import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import "./Profile.css"
import circle from "./Circle.png"

const Profile: React.FC = () => {
  return (
    <div className="profile_page">
      <h1 className="profile_title">Your Profile</h1>
      <img className="profile_dot" src={circle}/>
    </div>
  );
};

export default Profile;
