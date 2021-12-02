import React, { useState } from "react";
import "./Register.css";
import {
  IonIcon,
  IonInput,
  IonButton,
  IonToast,
  IonLoading,
  IonPage,
} from "@ionic/react";
import { arrowForwardOutline, person } from "ionicons/icons";
import { Link } from "react-router-dom";
import { registerUser } from "../../firebaseConfig";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [busy, setBusy] = useState<boolean>(false);

  async function register() {
    setBusy(true);
    if (password !== cpassword) {
      setMessage("Passwords do not match");
      setBusy(false);
      return setShowToast(true);
    }

    if (password.length < 7) {
      setMessage("Passwords too short");
      setBusy(false);
      return setShowToast(true);
    }

    if (email.trim() === "" || password.trim() === "") {
      setMessage("Email or password is empty");
      setBusy(false);
      return setShowToast(true);
    }

    const data = await registerUser(email, password);
    if (data) {
      setMessage("User registered");
      setBusy(false);
      setShowToast(true);
      window.history.replaceState({}, "", "/login");
      return true;
    }
  }

  return (
    <IonPage>
      <IonLoading message="please wait" duration={0} isOpen={busy} />
      <div className="login-shape"></div>
      <div className="login-heading">Sign Up!</div>
      <div className="login-desc">Let's get to know you :)</div>

      <div className="input-wrapper">
        <div className="icon-wrapper">
          <IonIcon className="person-icon" icon={person}></IonIcon>
        </div>
        <IonInput
          onIonChange={(e: any) => {
            setEmail(e.target.value);
          }}
          placeholder="Email ID"
          required={true}
          type="email"
          className="input-styling"
        />
      </div>

      <div className="input-wrapper">
        <div className="icon-wrapper">
          <IonIcon className="person-icon" icon={person}></IonIcon>
        </div>
        <IonInput
          onIonChange={(e: any) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required={true}
          type="password"
          className="input-styling"
        />
      </div>

      <div className="input-wrapper">
        <div className="icon-wrapper">
          <IonIcon className="person-icon" icon={person}></IonIcon>
        </div>

        <IonInput
          onIonChange={(e: any) => {
            setCPassword(e.target.value);
          }}
          placeholder="Confirm Password"
          required={true}
          type="password"
          className="input-styling"
        />
      </div>

      <IonButton
        expand="block"
        color="primary"
        id="login-main-button"
        size="large"
        className="button-styling"
        onClick={register}
      >
        Register
        <IonIcon className="arrow-icon" icon={arrowForwardOutline}></IonIcon>
      </IonButton>
      <p className="ion-text-center">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={message}
        duration={400}
      />
    </IonPage>
  );
};

export default Register;
