import React from 'react'
import './Onboarding.css';
import onboarding2 from "./onboarding2.png"
import { IonFab, IonFabButton, IonIcon, IonFabList, IonButton } from '@ionic/react';
import {  arrowForwardOutline } from 'ionicons/icons';



const Onboarding2: React.FC = () => {
    return (
        <div>
            <h1 className="app_name">Indusby</h1>
            {/* <img src={} alt=""/> */}
            <IonButton href="/login" expand='block' color='primary' id='login-main-button' size='large' className='button-styling'>Login <IonIcon className="arrow-icon" icon= {arrowForwardOutline}></IonIcon></IonButton>
            <h2 className="caption">New Around here?<a href="/register"> Sign Up</a></h2>
        </div>
    );
};

export default Onboarding2
