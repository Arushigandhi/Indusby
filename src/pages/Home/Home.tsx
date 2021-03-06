import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonNav,
} from "@ionic/react";
import { personOutline, homeOutline, helpOutline } from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Mixd from "../Mixd/Mixd";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Profile/Profile";
import "./Home.css";
import Source from "../SourceList/Source";



const Home: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
          <Route exact path="/mixd" component={Mixd} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/source" component={Source} />
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" >
          <IonTabButton tab="mixd" href="/mixd">
            <IonIcon icon={helpOutline} />
            {/* <IonLabel>MixD</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonNav />
            <IonIcon icon={homeOutline} />
            {/* <IonLabel>Dashboard</IonLabel> */}
          </IonTabButton>
          <IonTabButton
            className="tab-bar-icon-styling"
            tab="profile"
            href="/profile"
          >
            <IonNav />
            <IonIcon icon={personOutline} />
            {/* <IonLabel>Profile</IonLabel> */}
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
