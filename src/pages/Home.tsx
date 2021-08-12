import React from 'react';
import { IonPage } from '@ionic/react';
import DateTime from '../components/DateTime';
import HomePageTemp from '../components/HomePageTemp';

const Home: React.FC = () => {
    return (
        <IonPage>
            <DateTime />
            <HomePageTemp />
        </IonPage>
    );
};

export default Home;
