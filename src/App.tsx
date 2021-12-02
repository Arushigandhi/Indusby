import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Onboarding from './pages/Onboarding/Onboarding'
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Onboarding1 from './pages/Onboarding/Onboarding1';
import Onboarding2 from './pages/Onboarding/Onboarding2';
import { useEffect, useState } from 'react';
import { getCurrentUser } from './firebaseConfig'
import Mixd from './pages/Mixd/Mixd';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';


const RoutingSystem: React.FC = () => {
  return (
      <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/onboarding" component={Onboarding} />
              <Route exact path="/onboarding1" component={Onboarding1} />
              <Route exact path="/onboarding2" component={Onboarding2} />
              <Route exact path="/home" component={Home} />
            </IonRouterOutlet>
          </IonReactRouter>
  );
};


const App: React.FC = () => {

  const[busy,setBusy]=useState<boolean>(true)
  

  const dispatch = useDispatch()

  useEffect (() => {
    getCurrentUser().then((user: any) => {
        if(user){
          dispatch(setUserState(user.email))
          window.history.replaceState({}, '','/home')
        }
        else {
        
         window.history.replaceState({}, '','/')
        }
        setBusy(false)
    }
    )
  }, [])

  return (
  <IonApp>
    {busy? <IonSpinner />:<RoutingSystem />}
  </IonApp>
);
  };

export default App;
