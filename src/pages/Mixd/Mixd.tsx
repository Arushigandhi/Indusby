import React from "react";
import "./Mixd.css";
import BG from "./BG.png";
import ProfList from "../../components/ProfList/ProfList";
import { IonPage, IonContent } from "@ionic/react";

const Mixd: React.FC = () => {
  return (
    <IonPage>
    
      <div>
        <img src={BG} className="mixd_overview" alt="" />
        <h2 className="mixd_overview_text">What is MixD?</h2>
        {/* <h2 className="mixd_overview_text">Robust design customised for client needs</h2> */}
      </div>
      <h1 className="mixd_title">Consult a Professor:</h1>
      <IonContent className="prof_scroll">
        <ProfList profName="Dr. Gopinath Nayak" dotColour="#FFC542"></ProfList>
        <ProfList profName="Aryamann Ningombam" dotColour="#3ED598"></ProfList>
        <ProfList profName="Jyothsna Ashok" dotColour="#FF565E"></ProfList>
        <ProfList profName="Dhruva Goyal" dotColour="#FFC542"></ProfList>
        <ProfList profName="Vedika Sharma" dotColour="#3ED598"></ProfList>
        <ProfList profName="Ananya Tewari" dotColour="#FF565E"></ProfList>
        <ProfList profName="Diya Dhabade" dotColour="#FFC542"></ProfList>
    </IonContent>
    </IonPage>
  );
};

export default Mixd;
