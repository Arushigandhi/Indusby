import { IonCard, IonContent, IonPage } from "@ionic/react";
import React from "react";
import "./Card.css";

const Card: React.FC<{ categName: String; egName: String; cardColour: any }> = ({
    categName, egName, cardColour,}) => {
  return (
    <div >
    <a href="/source">
    <div className="card_layout" style={{ backgroundColor: cardColour }}>
        <h1 className="card_title" >{categName}</h1>
        <h2 className="card_eg" >Eg: {egName}</h2>
    </div>
    </a>
    </div>
  );
};

export default Card;
