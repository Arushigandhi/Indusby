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
        <h2 className="mixd_overview_description">Robust design customised<br /> for client needs</h2>
      </div>
      <h1 className="mixd_title">Consult a Professor:</h1>
      <IonContent className="prof_scroll">
        <ProfList profName="Dr. Gopinath Nayak, MIT" profPos="Concrete Tech." dotColour="#FFC542"></ProfList>
        <ProfList profName="Dr. BB Das, NIT-K" profPos="Concrete & C&D" dotColour="#3ED598"></ProfList>
        <ProfList profName="Girish Ng, MIT" profPos="Transportation" dotColour="#FF565E"></ProfList>
        <ProfList profName="Dr Manu Santanam, IIT-M" profPos="Bagasse Ash" dotColour="#FFC542"></ProfList>
        <ProfList profName="Dr Gangadhar, NIT-K" profPos="Construction Mgmt" dotColour="#3ED598"></ProfList>
        <ProfList profName="Sugandhini HK, MIT" profPos="Concrete Tech." dotColour="#FF565E"></ProfList>
        <ProfList profName="Laxman Kudwa, MIT" profPos="Green Buildings" dotColour="#FFC542"></ProfList>
    </IonContent>
    </IonPage>
  );
};

export default Mixd;
