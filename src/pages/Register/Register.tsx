import React, {useState} from 'react'
import './Register.css'
import {IonIcon, IonInput, IonButton} from '@ionic/react'
import { arrowForwardOutline, person, personOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom'

const Register: React.FC = () =>  {

        const [name, setName] = useState<string>('')
        const [email, setEmail] = useState<string>('')
        const [password, setPassword] = useState<string>('')

        function registerUser() {
        console.log(name, email, password)
    }

    return (
        <div className="login">
            <div className="login-shape"></div>
            <div className="login-heading">
                Sign Up!
            </div>
            <div className="login-desc">
                Let's get to know you :)
            </div>
            <div className="input-wrapper">
            <div className="icon-wrapper">
                <IonIcon className="person-icon" icon= {person}></IonIcon>
            </div>
            <IonInput onIonChange={
              (e: any) => {
                setName(e.target.value);
              }
            } placeholder='Name' required={true} type='text' className='input-styling' />
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

            <IonButton expand='block' color='primary' id='login-main-button' size='large' className='button-styling' onClick={registerUser}>Register<IonIcon className="arrow-icon" icon= {arrowForwardOutline}></IonIcon></IonButton>
            <p className="ion-text-center">
           Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>        
    )
}

export default Register
