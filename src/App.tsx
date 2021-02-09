import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { carOutline, musicalNoteOutline, navigateOutline, menuOutline } from 'ionicons/icons';
import Navigation from './pages/Navigation';
import Car from './pages/Car';
import Music from './pages/Music';
import Settings from './pages/Settings';

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
import TabBar from './components/TabBar';
import Home from './pages/Home';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/navigation" component={Navigation} exact={true} />
                <Route path="/home" component={Home} exact={true} />
                <Route path="/car" component={Car} exact={true} />
                <Route path="/music" component={Music} exact={true} />
                <Route path="/settings" component={Settings} />
                <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
            </IonRouterOutlet>
            <TabBar />
        </IonReactRouter>
    </IonApp>
);

export default App;
