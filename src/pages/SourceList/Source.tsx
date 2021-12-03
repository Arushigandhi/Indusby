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
import { useHistory } from "react-router";
import { logoutUser } from "../../firebaseConfig";
import "./Source.css"
import { addOutline, arrowBack, funnelOutline } from "ionicons/icons";
import BG from "./BG.png";

const Source: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false);
    const history = useHistory();
  
    async function logout() {
      setBusy(true);
      await logoutUser();
      setBusy(false);
      window.location.reload();
      history.replace("/login");
    }
    const [showModal, setShowModal] = useState(false);
    const [showModalDetails, setshowModalDetails] = useState(false);
    const showModalNow = (num: number) => {
      setShowModal(true);
    };
    const [info, setInfo] = useState([
      {
        name: "Aluminum",
        email: "j@gmail.com",
        phone: "9888888888",
        quantity: 0,
      },
    ]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [quantity, setQuantity] = useState(0);
    const setVals = () => {
      setInfo([...info, { name, email, phone, quantity }]);
    };
    return (
      <div>
        <div className="heading-wrapper">
          <IonButton className="back-button" href="/home">
      <IonIcon slot="icon-only" icon={arrowBack} className="back-icon" />
    </IonButton>
    <IonFab vertical="bottom" horizontal="end" slot="fixed" className="add_button" color="primary">
       <IonFabButton>
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
        <IonButton expand="block" onClick={() => showModalNow(1)}>
          Industrial By-Products
        </IonButton>
        <IonButton expand="block" onClick={() => showModalNow(2)}>
          Construction & Demolition
        </IonButton>
        <IonButton expand="block" onClick={() => showModalNow(3)}>
          E-Waste
        </IonButton>
        <IonButton expand="block" onClick={() => showModalNow(4)}>
          Other Categories
        </IonButton>
  
        <IonButton onClick={async () => await logout()}>Logout</IonButton>
        <IonButton
          className="text-right"
          onClick={() => setshowModalDetails(true)}
        >
          Add Data
        </IonButton>
        <IonModal
          isOpen={showModal}
          cssClass="my-custom-class"
          swipeToClose={true}
          presentingElement={undefined}
          onDidDismiss={() => setShowModal(false)}
        >
          <IonList>
            <IonListHeader lines="inset">
              <IonLabel>Name</IonLabel>
              <IonLabel>Email</IonLabel>
              <IonLabel>Phone</IonLabel>
              <IonLabel>Quantity</IonLabel>
            </IonListHeader>
            {info.map((item, index) => {
              return (
                <IonItem key={index}>
                  <IonLabel>{item.name}</IonLabel>
                  <IonLabel>{item.email}</IonLabel>
                  <IonLabel>{item.phone}</IonLabel>
                  <IonLabel>{item.quantity}</IonLabel>
                </IonItem>
              );
            })}
          </IonList>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        <IonModal
          isOpen={showModalDetails}
          cssClass="my-custom-class"
          swipeToClose={true}
          presentingElement={undefined}
          onDidDismiss={() => setshowModalDetails(false)}
        >
          <form className="ion-padding">
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput onIonChange={(e) => setName(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Quantity</IonLabel>
              <IonInput
                onIonChange={(e) => setQuantity(parseInt(e.detail.value!))}
                type="number"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                onIonChange={(e) => setEmail(e.detail.value!)}
                type="email"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Mobile Number</IonLabel>
              <IonInput
                onIonChange={(e) => setPhone(e.detail.value!)}
                type="text"
              />
            </IonItem>
            <IonButton onClick={setVals} expand="block">
              Submit
            </IonButton>
          </form>
          <IonButton onClick={() => setshowModalDetails(false)}>
            Close Modal
          </IonButton>
        </IonModal>
      </div>
    );
  };

export default Source;
