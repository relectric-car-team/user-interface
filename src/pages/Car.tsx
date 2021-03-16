import React, { useState } from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonModal,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { batteryHalfOutline, close } from 'ionicons/icons';
import './Car.scss';
import '../theme/Modal.scss';
import './InnerModal.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../features/Routing/RouterStore';
import { Pages } from '../Models/Enums';
import carAerial from '../assets/car-aerial/car-aerial.svg';
import energyGraph from '../assets/graphs/Energy.jpg';
import batteryGraph from '../assets/graphs/Battery.jpg';
import Energy from './CarModals/Energy';
import Battery from './CarModals/Battery';

const Car: React.FC = () => {
    const dispatch = useDispatch();

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
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Car
                */}
                <IonToolbar color="relectric-car" className="CarToolBar">
                    <IonRow>
                        <IonButton
                            fill="clear"
                            color="white"
                            shape="round"
                            onClick={() => dispatch(setPage(Pages.Home))}
                        >
                            <IonIcon src={close} className="XButton" />
                        </IonButton>
                        <IonTitle>Car</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen scrollY={false} className="ModalContent">
                {/* Grid used to partition each area of the page */}
                <IonGrid>
                    <IonRow>
                        {/* Modal to display the energy on click */}
                        <IonModal isOpen={showEnergy} onDidDismiss={() => setShowEnergy(false)} cssClass="InnerModal">
                            <Energy />
                        </IonModal>
                        {/* Left Side: Statistics Fuel efficiency/Energy Consumption */}
                        <IonCol className="LeftStats" size="4">
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
                        <IonCol size="4">
                            <IonIcon className="AerialView" icon={carAerial} />
                        </IonCol>
                        {/* Modal to display the battery on click*/}
                        <IonModal isOpen={showBattery} onDidDismiss={() => setShowBattery(false)} cssClass="InnerModal">
                            <Battery />
                        </IonModal>
                        {/* Right Side: Statistics Battery */}
                        <IonCol className="RightStats" size="4">
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
