import React, { useState } from 'react'
import './Login.css'
import {IonIcon, IonInput, IonButton, IonToast, IonLoading} from '@ionic/react'
import { arrowForwardOutline, person, personOutline } from 'ionicons/icons'
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../firebaseConfig'
import { setUserState } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [busy, setBusy] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [showToast, setShowToast] = useState<boolean>(false)
    const [busy, setBusy] = useState<boolean>(false)

      const dispatch = useDispatch()
  const history = useHistory()

    async function login() {
      setBusy(true)
      try{
        
        const data: any = await loginUser(email, password);
        console.log(data)
        dispatch(setUserState(data.user.email))
        history.push('/home')
        setMessage("Logged in successfully");
        setShowToast(true); 
      } catch(e:any) {
        console.log(e.message, e.code)
        setMessage("Error Logging in");
        setShowToast(true);
      } 
      setBusy(false);
    }
    setBusy(false);
  }
  return (
    <IonPage className="login-page">
      <IonContent className="login-page">
        <IonLoading message="please wait" duration={0} isOpen={busy} />
        <div className="login-shape"></div>
        <div className="login-heading">Login</div>
        <div className="login-desc">And, jump in to the app :)</div>
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

        <IonButton
          expand="block"
          color="primary"
          id="login-main-button"
          size="large"
          className="button-styling"
          onClick={login}
        >
          Login{" "}
          <IonIcon className="arrow-icon" icon={arrowForwardOutline}></IonIcon>
        </IonButton>
        <p className="ion-text-center">
          New here? <Link to="/register">Register</Link>
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={message}
            duration={400}
          />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
