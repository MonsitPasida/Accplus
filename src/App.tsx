import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {IonApp,IonIcon,IonLabel,IonRouterOutlet,IonTabBar,IonTabButton,IonTabs,} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {addOutline,calendarOutline,homeOutline,listOutline,personOutline,todayOutline, walletOutline,} from "ionicons/icons";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Workschedule from "./pages/Workschedule"
import Slides from "./pages/Slides"
import Profiles from "./pages/Profiles"
import Other from "./pages/Other"
import Signup from "./pages/Signup"
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

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
import { UserContext } from './';

const App: React.FC = () => {
  const user = useContext(UserContext);
  console.log({ user });


  return(
  <IonApp>
    {user ? ( 
      <IonReactRouter>
        <IonTabs>
        <IonRouterOutlet>
        <Route component={Profiles} exact path="/"/>
        <Route path="/Profiles" component={Profiles} exact={true} />
        <Route path="/Home" component={Home} exact={true} />
        <Route path="/Workschedule" component={Workschedule} exact={true} />
        <Route path="/Product" component={Product} exact={true} />
        <Route path="/Other" component={Other} exact={true} />
       
        
        <Redirect to="/"/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={homeOutline} />
            <IonLabel>หน้าหลัก</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Workschedule" href="/Workschedule">
            <IonIcon icon={calendarOutline} />
            <IonLabel>ตารางงาน</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Product" href="/Product">
            <IonIcon icon={walletOutline} />
            <IonLabel>รายได้</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Profiles" href="/Profiles">
            <IonIcon icon={personOutline} />
            <IonLabel>ข้อมูลส่วนตัว</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Other" href="/Other">
            <IonIcon icon={listOutline} />
            <IonLabel>อื่นๆ</IonLabel>
          </IonTabButton>

        </IonTabBar>
        </IonTabs>
      
    </IonReactRouter>
    ):(
    <IonReactRouter>
    
        <IonRouterOutlet>
        <Route path="/Login" component={Login} exact={true} />
        <Route path="/Signup" component={Signup} exact={true} />
        <Route component={Slides} exact path="/"/>
        <Redirect to="/"/>
        </IonRouterOutlet>
        
    </IonReactRouter>
    )}
  </IonApp>
);
  }

export default App;
