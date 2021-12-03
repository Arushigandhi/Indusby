import { IonContent, IonIcon, IonPage, IonFabButton, IonFab } from "@ionic/react";
import React, { useState } from "react";
import {
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonCheckbox,
    IonModal,
    IonListHeader,
    IonList,
  } from "@ionic/react";

import "./Source.css"
import { addOutline, arrowBack, call, callOutline, close, cubeOutline, funnelOutline, helpOutline, homeOutline, mail,mailOutline,person } from "ionicons/icons";
import BG from "./BG.png";

const Source: React.FC = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [showModalDetails, setshowModalDetails] = useState(false);
    const showModalNow = (num: number) => {
      setShowModal(true);
    };
    const [info, setInfo] = useState([
      {
        name: "Aluminum",
        industry: "RTPCL Ltd.",
        email: "j@gmail.com",
        phone: "9888888888",
        quantity: 0,
      },
      {
        name: "Aluminum",
        industry: "RTPCL Ltd.",
        email: "j@gmail.com",
        phone: "9888888888",
        quantity: 0,
      },
    ]);
    const [name, setName] = useState("");
    const [industry, setIndustry] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [quantity, setQuantity] = useState(0);
    const setVals = () => {
      setInfo([...info, { name, industry, email, phone, quantity }]);
    };
    return (
      <div>
        <div className="heading-wrapper">
          <IonButton className="back-button" href="/home">
      <IonIcon slot="icon-only" icon={arrowBack} className="back-icon" />
    </IonButton>
    <IonFab vertical="bottom" horizontal="end" slot="fixed" className="add_button" color="primary">
       <IonFabButton onClick={() => setshowModalDetails(true)}>
                    <IonIcon className="next-icon" icon= {addOutline} />
        </IonFabButton>
        </IonFab>
        <p className="ion-text-center heading">Industrial By-products</p>
        </div>
        <img src={BG} className="mixd_overview" alt="" />
        <div className="desc-wrapper"><p className="desc">Choose your by-product source</p>
        <IonButton className="filter" href="/home">
      <IonIcon slot="icon-only" icon={funnelOutline} className="filter-icon" />
    </IonButton></div>
    {info.map((item, index) => {
      return(
        <div className="list-item">
          <div className="qty-wrapper">
            {item.quantity}
            <p>MMT</p>
          </div>
          <div className="list-desc-wrapper">
            <div className="name">{item.name}</div>
            <div className="industry">{item.industry}</div>
            <div className="phone-wrapper">
            <div><IonIcon icon={call} className="call-icon"></IonIcon></div>
            <div>: {item.phone}</div>
            </div>
            <div className="phone-wrapper">
            <div><IonIcon icon={mail} className="call-icon"></IonIcon></div>
            <div>: {item.email}</div>
            </div>
            </div>
        </div>
      )
             })}
        
       
        
        <IonModal
          isOpen={showModalDetails}
          cssClass="my-custom-class"
          swipeToClose={true}
          presentingElement={undefined}
          onDidDismiss={() => setshowModalDetails(false)}
        >

          
          <form className="ion-padding">
            <div className="login-shape"></div>
        <div className="login-desc">Fill the form to add your listing</div>
              <div className="input-wrapper">
          <div className="icon-wrapper">
            <IonIcon className="person-icon" icon={cubeOutline}></IonIcon>
          </div>
          <IonInput
            onIonChange={(e) => setName(e.detail.value!)}
            placeholder="Product Name"
            required={true}
            className="input-styling"
          />
        </div>

        <div className="input-wrapper">
          <div className="icon-wrapper">
            <IonIcon className="person-icon" icon={homeOutline}></IonIcon>
          </div>
          <IonInput
            onIonChange={(e) => setIndustry(e.detail.value!)}
            placeholder="Company Name"
            required={true}
            className="input-styling"
          />
        </div>

        <div className="input-wrapper">
          <div className="icon-wrapper">
            <IonIcon className="person-icon" icon={helpOutline}></IonIcon>
          </div>
          <IonInput
            onIonChange={(e) => setQuantity(parseInt(e.detail.value!))}
            placeholder="Quantity"
            required={true}
            className="input-styling"
          />
        </div>
            
          <div className="input-wrapper">
          <div className="icon-wrapper">
            <IonIcon className="person-icon" icon={mailOutline}></IonIcon>
          </div>
          <IonInput
            onIonChange={(e) => setEmail(e.detail.value!)}
            placeholder="Email ID"
            required={true}
            className="input-styling"
          />
        </div>
            
          
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <IonIcon className="person-icon" icon={callOutline}></IonIcon>
          </div>
          <IonInput
            onIonChange={(e) => setPhone(e.detail.value!)}
            placeholder="Mobile No."
            required={true}
            className="input-styling"
          />
        </div>
            
          <br />
           <br />
            <IonButton onClick={setVals} expand="block">
              Submit
            </IonButton>
          </form>

        <IonFab vertical="bottom" horizontal="center" slot="fixed" className="add_button" color="primary">
       <IonFabButton onClick={() => setshowModalDetails(false)}>
                    <IonIcon className="next-icon" icon= {close} />
        </IonFabButton>
        </IonFab>     
        </IonModal>
      </div>
    );
  };

export default Source;
