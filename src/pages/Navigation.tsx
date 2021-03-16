import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { close } from 'ionicons/icons';
import './Navigation.scss';

const Navigation: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Navigation
                */}
                <IonToolbar color="#608091" className="NavigationToolBar">
                    <IonRow>
                        <IonButton fill="clear" color="white" shape="round">
                            <IonIcon src={close} className="XButton" />
                        </IonButton>
                        <IonTitle>Navigation</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Navigation;
