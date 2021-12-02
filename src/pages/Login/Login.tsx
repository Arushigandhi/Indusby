import React, { useState } from 'react'
import './Login.css'
import {IonIcon, IonInput, IonButton} from '@ionic/react'
import { arrowForwardOutline, person, personOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import { loginUser } from '../../firebaseConfig'

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function login() {
      try{
        const data = await loginUser(email, password);
        console.log(data)
      } catch(e:any) {
        console.log(e.message, e.code)
      }
    }
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

            <IonButton expand='block' color='primary' id='login-main-button' size='large' className='button-styling' onClick={login}>Login <IonIcon className="arrow-icon" icon= {arrowForwardOutline}></IonIcon></IonButton>
            <p className="ion-text-center">
          New here? <Link to="/register">Register</Link>
            </p>
        </div>        
    );
};

export default Login;
