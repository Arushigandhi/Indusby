import React, { useState } from 'react'
import './Login.css'
import {IonContent, IonIcon, IonItem, IonInput, IonButton} from '@ionic/react'
import { arrowForwardOutline, person, personOutline } from 'ionicons/icons'

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
            <div className="input-wrapper">
            <div className="icon-wrapper">
                <IonIcon className="person-icon" icon= {person}></IonIcon>
            </div>
            <IonInput onIonChange={
              (e: any) => {
                setEmail(e.target.value);
              }
            } placeholder='Email ID' required={true} type='email' className='input-styling' />
            </div>
            
            <div className="input-wrapper">
            <div className="icon-wrapper">
                <IonIcon className="person-icon" icon= {person}></IonIcon>
            </div>
            <IonInput onIonChange={
              (e: any) => {
                setPassword(e.target.value);
              }
            } placeholder='Password' required={true} type='password' className='input-styling' />
            </div>

            <IonButton expand='block' color='primary' id='login-main-button' size='large' className='button-styling'>Login <IonIcon className="arrow-icon" icon= {arrowForwardOutline}></IonIcon></IonButton>

        </div>        
    );
};

export default Login;
