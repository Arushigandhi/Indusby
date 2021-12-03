import {
  IonButton,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonCheckbox,
  IonModal,
  IonListHeader,
  IonList,
  IonPage,
} from "@ionic/react";
import React, { useState } from "react";
import Card from "../../components/CategoryOneCard/Card";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../firebaseConfig";
import { Link} from "react-router-dom";

const Dashboard: React.FC = () => {

  return (
    <div>
      <h1 className="category1">What are you looking for?</h1>
      <Card categName="Industrial By-products" egName="Fly Ash, Bagasse Ash, Rice-Husk Ash, Slag" cardColour="#625B39"/>
      <Card categName="Construction & Demolition" egName="Masonry, Frames, Tiles, Concrete" cardColour="#625B39"/>
      <Card categName="E-Waste" egName="Electronic Devices, Bulbs" cardColour="#625B39"/>
      <Card categName="Other Categories" egName="Fabric & Fibres" cardColour="#625B39"/>
    </div>
    
  );
};

export default Dashboard;
