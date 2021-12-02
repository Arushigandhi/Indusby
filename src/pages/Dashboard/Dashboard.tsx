import React from "react";
import Card from "../../components/CategoryOneCard/Card";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="category1">What are you looking for?</h1>
      <Card />
    </div>
  );
};

export default Dashboard;
