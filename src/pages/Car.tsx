import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import carAerial from '../assets/icons/car-aerial.png';
import './Car.css';

const Car: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="#099648" className="CarToolBar">
                    <IonTitle>Car View</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Car Tab</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonImg className="AerialView" src={carAerial} />
            </IonContent>
        </IonPage>
    );
};

export default Car;
