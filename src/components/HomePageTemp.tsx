import { IonContent, IonTitle } from '@ionic/react';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayedTemp, selectTempSymbol } from '../app/reducersindex';

import './HomePageTemp.scss';

const HomePageTemp: React.FC = () => {
    const temperatureSymbol = useSelector(selectTempSymbol);
    const temperatureValue = useSelector(selectDisplayedTemp);
    return (
        <IonContent fullscreen={true} className="content" slot="fixed" scrollY={false}>
            <IonTitle className="location">Inside</IonTitle>

            <IonTitle className="temperature">
                {temperatureValue}
                {temperatureSymbol}
            </IonTitle>
        </IonContent>
    );
};

export default HomePageTemp;
