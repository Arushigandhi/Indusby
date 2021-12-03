import React from 'react'
import './Onboarding.css';
import onboarding from "./onboarding1.png"
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import {  arrowForwardOutline } from 'ionicons/icons';



const Onboarding: React.FC = () => {
    return (
        <div>
            <img src={onboarding} alt=""/>
            <h1 className="title">What is Indusby?</h1>
            <h2 className="caption">A portal that enlists industrial by-products and help in maximizing the utilization by offering customized solution to the client needs.!</h2>
            <a href="/onboarding1">
            <IonFab vertical="bottom" horizontal="end" slot="fixed" className="next_button" color="primary">
                <IonFabButton>
                    <IonIcon className="next-icon" icon= {arrowForwardOutline} />
                </IonFabButton>
            </IonFab>
            </a>
        </div>
    );
};

export default Onboarding
