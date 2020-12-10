import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Navigation from './pages/Navigation';
import Car from './pages/Car';
import Music from './pages/Music';

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

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/navigation" component={Navigation} exact={true} />
                    <Route path="/car" component={Car} exact={true} />
                    <Route path="/music" component={Music} />
                    <Route path="/" render={() => <Redirect to="/navigation" />} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="navigation" href="/navigation">
                        <IonIcon icon={triangle} />
                        <IonLabel>Navigation</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="car" href="/car">
                        <IonIcon icon={ellipse} />
                        <IonLabel>Car</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="music" href="/music">
                        <IonIcon icon={square} />
                        <IonLabel>Music</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
