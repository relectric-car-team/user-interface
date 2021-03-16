import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonModal,
} from '@ionic/react';
import { batteryHalfOutline } from 'ionicons/icons';
import carAerial from '../assets/icons/car-aerial.png';
import energyGraph from '../assets/icons/Energy.jpg';
import batteryGraph from '../assets/icons/BatteryGraph.jpg';
import './Car.css';
import './InnerModal.css';
import Energy from './CarModals/Energy';
import Battery from './CarModals/Battery';

const Car: React.FC = () => {
    const [showEnergy, setShowEnergy] = useState(false);
    const [showBattery, setShowBattery] = useState(false);

    const openEnergyModal = function () {
        setShowEnergy(true);
    };

    const openBatteryModal = function () {
        setShowBattery(true);
    };

    return (
        <IonPage className="CarPage">
            {/* Tool bar header for Car page */}
            <IonHeader>
                <IonToolbar color="#099648" className="CarToolBar">
                    <IonTitle>Car</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen scrollY={false}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Car Tab</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/* Grid used to partition each area of the page */}
                <IonGrid>
                    <IonRow>
                        {/* Modal to display the energy on click */}
                        <IonModal isOpen={showEnergy} onDidDismiss={() => setShowEnergy(false)} cssClass="InnerModal">
                            <Energy></Energy>
                        </IonModal>
                        {/* Left Side: Statistics Fuel efficiency/Energy Consumption */}
                        <IonCol className="LeftStats">
                            <IonCard className="FuelEfficiency" button={true} onClick={openEnergyModal}>
                                <IonImg src={energyGraph} className="ImagePreview" />
                                <IonCardHeader>
                                    <IonCardTitle>Energy</IonCardTitle>
                                    <IonCardSubtitle>Range: 400km</IonCardSubtitle>
                                    <IonCardSubtitle>Consumption: 15kWh/100km</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent></IonCardContent>
                            </IonCard>
                        </IonCol>
                        {/* Middle Section: Car View */}
                        <IonCol>
                            <IonImg className="AerialView" src={carAerial} />
                        </IonCol>
                        {/* Modal to display the battery on click*/}
                        <IonModal isOpen={showBattery} onDidDismiss={() => setShowBattery(false)} cssClass="InnerModal">
                            <Battery></Battery>
                        </IonModal>
                        {/* Right Side: Statistics Battery */}
                        <IonCol className="RightStats">
                            <IonCard className="Battery" button={true} onClick={openBatteryModal}>
                                <IonImg src={batteryGraph} className="ImagePreview" />
                                <IonCardHeader>
                                    <IonCardTitle>Battery</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className="BatteryStats">
                                    <IonCardTitle className="BatteryPercentage">56%</IonCardTitle>
                                    <IonIcon src={batteryHalfOutline} className="BatteryIcon"></IonIcon>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Car;
