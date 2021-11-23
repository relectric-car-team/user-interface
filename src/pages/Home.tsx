import React from 'react';
import { IonPage } from '@ionic/react';
import DateTime from '../components/DateTime';
import ThreeDimensionCar from '../components/ThreeDimensionCar';

const Home: React.FC = () => {
    return (
        <IonPage>
            <DateTime />
            <ThreeDimensionCar />
        </IonPage>
    );
};

export default Home;
