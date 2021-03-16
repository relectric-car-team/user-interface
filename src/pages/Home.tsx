import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import DateTime from '../components/DateTime';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <DateTime />
            </IonContent>
        </IonPage>
    );
};

export default Home;
