import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ComponentModal.css';
import DateTime from '../components/DateTime';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <DateTime />
            </IonContent>
        </IonPage>
    );
};

export default Home;
