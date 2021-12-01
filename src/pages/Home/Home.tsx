import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


const Home: React.FC = () => {

  return(
    <IonReactRouter>
      <IonTabs >
      <IonRouterOutlet>
        {/* <Route exact path="/mixd" component={mixd} /> */}
        {/* <Route exact path="/dashboard" component={dashboard} /> */}
        {/* <Route exact path="/profile" component={profile} /> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color='#96A7AF'>
            <IonTabButton  className='tab-bar-icon-styling' tab="tab1" href="/mixd">
              <IonIcon  icon={personCircle} />
              <IonLabel>MixD</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/dashboard">
              <IonIcon icon={personCircle} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
            <IonTabButton className='tab-bar-icon-styling' tab="tab3" href="/profile">
              <IonIcon icon={personCircle} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonReactRouter>

  );
};

export default Home;