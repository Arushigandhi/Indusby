import React, { useState } from 'react'
import './Login.css'
import {IonContent, IonIcon, IonItem, IonInput, IonLabel} from '@ionic/react'
import { person, personOutline } from 'ionicons/icons'

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div className="login">
            <div className="login-shape"></div>
            <div className="login-heading">
                Login
            </div>
            <div className="login-desc">
                And, jump in to the app :)
            </div>
            <div className="icon-wrapper">
                <IonIcon className="person-icon" icon= {person}></IonIcon>
            </div>
            <IonInput onIonChange={
              (e: any) => {
                setEmail(e.target.value);
              }
            } placeholder='Email' required={true} type='email' className='input-styling' />

            
        </div>        
    );
};

export default Login;
