import React from 'react'
import './Onboarding.css';
import onboarding2 from "./onboarding2.png"
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import {  arrowForwardOutline } from 'ionicons/icons';



const Onboarding1: React.FC = () => {
    return (
        <div>
            <img src={onboarding2} alt=""/>
            <h1 className="title">How does Indusby work?</h1>
            <h2 className="caption">We bring resourceful materials, its potential consumers and wisdom under a single user-friendly portal with a goal of high relevance and delivery.</h2>
            <a href="/onboarding2">
                <IonFab vertical="bottom" horizontal="end" slot="fixed" className="next_button" color="primary">
                <IonFabButton>
                    <IonIcon className="next-icon" icon= {arrowForwardOutline} />
                </IonFabButton>
            </IonFab>
            </a>
        </div>
    );
};

export default Onboarding1
