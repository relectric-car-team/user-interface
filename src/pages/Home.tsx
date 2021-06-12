import React from 'react';
import { IonPage } from '@ionic/react';
import DateTime from '../components/DateTime';

const Home: React.FC = () => {
    return (
        <IonPage>
            <DateTime />
        </IonPage>
    );
};

export default Home;
