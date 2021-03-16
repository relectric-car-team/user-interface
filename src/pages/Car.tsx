import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { close } from 'ionicons/icons';
import './Car.scss';

const Car: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Car
                */}
                <IonToolbar color="#65918A" className="CarToolBar">
                    <IonRow>
                        <IonButton fill="clear" color="white" shape="round">
                            <IonIcon src={close} className="XButton" />
                        </IonButton>
                        <IonTitle>Car</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Car;
