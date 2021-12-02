import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import Card from "../../components/CategoryOneCard/Card";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../firebaseConfig";

const Dashboard: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const history = useHistory();

  async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    window.location.reload();
    history.replace("/login");
  }

  return (
    <div>
      <h1 className="category1">What are you looking for?</h1>
      <Card />
      <IonButton onClick={async () => await logout()}>Logout</IonButton>
    </div>
  );
};

export default Dashboard;
