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

import styled from 'styled-components';
import { batteryHalfOutline, close } from 'ionicons/icons';
import './Car.scss';
import '../theme/Modal.scss';
import './InnerModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux-features/Routing/RouterStore';
import { Pages } from '../Models/Enums';
import carAerial from '../assets/car-aerial/car-aerial-frame.svg';
import passengerDoor from '../assets/car-aerial/passenger-door.svg';
import driverDoor from '../assets/car-aerial/driver-door.svg';
import energyGraph from '../assets/graphs/Energy.jpg';
import batteryGraph from '../assets/graphs/Battery.jpg';
import Energy from './CarModals/Energy';
import Battery from './CarModals/Battery';

import { updateDoors } from '../features/Car/CarStore';
import { doorStates, selectDarkModeActive } from '../app/reducersindex';
import { DoorsEnum } from '../features/Car/CarStore';

const StyledIcon = styled(IonIcon).attrs((props: { colour: string }) => ({
    colour: props.colour,
}))`
    stroke: ${(props) => props.colour};
`;

const StyledDoor = styled(IonIcon).attrs((props: { colour: string; open: string }) => ({
    colour: props.colour,
    open: props.open,
}))`
    stroke: ${(props) => props.colour};
    fill: ${(props) => (props.colour === 'white' ? '#121317' : 'white')};
    transform: ${(props) => props.open};
`;

const Car: React.FC = () => {
    const dispatch = useDispatch();

    const [showEnergy, setShowEnergy] = useState(false);
    const [showBattery, setShowBattery] = useState(false);
    //const [darkMode] = useState(document.body.classList.contains('dark'));
    const darkMode = useSelector(selectDarkModeActive);
    const Doors = useSelector(doorStates);

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
                        <IonCol className="LeftStats" size="3.5">
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
                        <IonCol className="CenterStats" size="5">
                            {/*
                                Three Icons where the doors lay ontop of the car frame, when doors open, the door models
                                rotate and move to give the apperence of an open door.
                            */}
                            <StyledIcon className="AerialView" icon={carAerial} colour={darkMode ? 'white' : 'black'} />
                            <StyledDoor
                                className="AerialViewDriverDoor"
                                icon={driverDoor}
                                colour={darkMode ? 'white' : 'black'}
                                open={
                                    Doors.driverDoorOpen
                                        ? 'rotate(32deg) translate(-32px)'
                                        : 'rotate(0deg) translate(0)'
                                }
                                onClick={() =>
                                    Doors.driverDoorOpen
                                        ? dispatch(updateDoors({ door: DoorsEnum.DRIVER, open: false }))
                                        : dispatch(updateDoors({ door: DoorsEnum.DRIVER, open: true }))
                                }
                            />
                            <StyledDoor
                                className="AerialViewPassengerDoor"
                                icon={passengerDoor}
                                colour={darkMode ? 'white' : 'black'}
                                open={
                                    Doors.passengerDoorOpen
                                        ? 'rotate(-32deg) translate(32px)'
                                        : 'rotate(0deg) translate(0)'
                                }
                                onClick={() =>
                                    Doors.passengerDoorOpen
                                        ? dispatch(updateDoors({ door: DoorsEnum.PASSENGER, open: false }))
                                        : dispatch(updateDoors({ door: DoorsEnum.PASSENGER, open: true }))
                                }
                            />
                        </IonCol>
                        {/* Modal to display the battery on click*/}
                        <IonModal isOpen={showBattery} onDidDismiss={() => setShowBattery(false)} cssClass="InnerModal">
                            <Battery />
                        </IonModal>
                        {/* Right Side: Statistics Battery */}
                        <IonCol className="RightStats" size="3.5">
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
