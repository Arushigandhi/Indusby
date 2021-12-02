import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Mixd from '../Mixd/Mixd';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';


const Home: React.FC = () => {

  return(
    <IonReactRouter>
      <IonTabs >
      <IonRouterOutlet>
        <Route exact path="/mixd" component={Mixd} /> 
        <Route exact path="/dashboard" component={Dashboard} /> 
        <Route exact path="/profile" component={Profile} /> 
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color='#96A7AF'>
            <IonTabButton  className='tab-bar-icon-styling' tab="tab1" href="/mixd">
              <IonIcon  icon={personCircle} />
              {/* <IonLabel>MixD</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="tab4" href="/dashboard">
              <IonIcon icon={personCircle} />
              {/* <IonLabel>Dashboard</IonLabel> */}
            </IonTabButton>
            <IonTabButton className='tab-bar-icon-styling' tab="tab3" href="/profile">
              <IonIcon icon={personCircle} />
              {/* <IonLabel>Profile</IonLabel> */}
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonReactRouter>

  );
};

export default Home;