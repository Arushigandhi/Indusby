import React from 'react'
import './Onboarding.css';
import logo from "./logo.png"
import { IonFab, IonFabButton, IonIcon, IonFabList, IonButton } from '@ionic/react';
import {  arrowForwardOutline } from 'ionicons/icons';



const Onboarding2: React.FC = () => {
    return (
        <div>
            <h1 className="app_name">Indusby</h1>
            <h2 className="caption">Adding environmental credentials to your product!</h2>
            <img className="logo" src={logo} alt=""/>
            <IonButton href="/login" expand='block' color='primary' id='login-main-button' size='large' className='button-styling'>Login <IonIcon className="arrow-icon" icon= {arrowForwardOutline}></IonIcon></IonButton>
            <h2 className="question">New Around here?<a href="/register"> Sign Up</a></h2>
        </div>
    );
};

export default Onboarding2
