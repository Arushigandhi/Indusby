import { AnyNsRecord } from "dns";
import React from "react";
import "./ProfList.css";
import { Link } from "react-router-dom";

const ProfList: React.FC<{ profName: String; dotColour: any }> = ({
  profName,
  dotColour,
}) => {
  return (
    <div>
      <div className="prof_layout">
        <span className="dot" style={{ backgroundColor: dotColour }}></span>
        <h1 className="prof_title">{profName}</h1>
      </div>
    </div>
  );
};

export default ProfList;
