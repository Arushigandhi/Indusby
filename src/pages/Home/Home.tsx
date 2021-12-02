import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import { personOutline, homeOutline, helpOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Mixd from "../Mixd/Mixd";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Profile/Profile";

const Home: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/mixd" component={Mixd} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="#96A7AF">
          <IonTabButton tab="mixd" href="/mixd">
            <IonIcon icon={helpOutline} />
            <IonLabel>MixD</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton
            className="tab-bar-icon-styling"
            tab="profile"
            href="/profile"
          >
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
