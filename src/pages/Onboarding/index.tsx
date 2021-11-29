import React from 'react'
import './Onboarding.css';
import onboarding from "./onboarding1.png"
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import {  arrowForwardOutline } from 'ionicons/icons';



function index() {
    return (
        <div>
            <img src={onboarding} alt=""/>
            <h1 className="title">What is Indusby?</h1>
            <h2 className="caption">We will connect you to avenues of industry waste 
            that you can make use of for your projects, 
            thus boosting sustainability!</h2>
            <IonFab vertical="bottom" horizontal="end" slot="fixed" className="next_button" color="primary">
                <IonFabButton>
                    <IonIcon className="next-icon" icon= {arrowForwardOutline} />
                </IonFabButton>
            </IonFab>
        </div>
    )
}

export default index
