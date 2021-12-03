import React from "react";
import "./ProfList.css";
import { Link } from "react-router-dom";

const ProfList: React.FC<{ profName: String; profPos: String; dotColour: any }> = ({
  profName, profPos,
  dotColour,
}) => {
  return (
    <div>
      <div className="prof_layout">
        <span className="dot" style={{ backgroundColor: dotColour }}></span>
        <div className="prof_details">
        <div><h1 className="prof_title">{profName}</h1></div>
        <div><h1 className="prof_title_desc">Expertise: {profPos}</h1></div>
        </div>
      </div>
    </div>
  );
};

export default ProfList;
