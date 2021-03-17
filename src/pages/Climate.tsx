import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCol,
    IonRow,
    IonButton,
    IonIcon,
    IonRange,
} from '@ionic/react';
import { close } from 'ionicons/icons';
import { thermometerOutline } from 'ionicons/icons';
import styled from 'styled-componenets';

/**
 * Imports for all custom icons
 */
import climateUpper from '../assets/icons/climate-upper.png';
import climateUpperOn from '../assets/icons/climate-upper-on.png';
import climateLower from '../assets/icons/climate-lower.png';
import climateLowerOn from '../assets/icons/climate-lower-on.png';
import climateUpperAndLower from '../assets/icons/climate-upper-and-lower.png';
import climateUpperAndLowerOn from '../assets/icons/climate-upper-and-lower-on.png';
import climateFront from '../assets/icons/climate-front.png';
import climateFrontOn from '../assets/icons/climate-front-on.png';
import fan from '../assets/icons/fan-on.png';
import './Climate.scss';
import '../theme/Modal.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../features/Routing/RouterStore';
import { Pages } from '../Models/Enums';

/**
 * Enums for consistent identification of the direction mode selected
 */
enum Direction {
    Upper = 'Upper',
    Lower = 'Lower',
    UpperAndLower = 'UpperAndLower',
    Front = 'Front',
}

// /**
//  * Enums for consistent identification of the intensity mode selected
//  */
// enum Intensity {
//     off = 'OFF',
//     one = '1',
//     two = '2',
//     three = '3',
//     four = '4',
// }

/**
 * The climate tab manages the selection choice of the user for intensity of airflow
 * and direction of airflow. The temperature of the vehicle interior is also displayed
 * on this tab.
 */
const Climate: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedDirection, setSelectedDirection] = useState<Direction>();
    // const [selectedIntensity, setSelectedIntensity] = useState<Intensity>();
    const [selectedTemp, setSelectedTemp] = useState('rgb(255, 0, 0)');

    // dummy varaible to represent interior temperature measurement
    const currTemp = 22;

    const StyledToolbar = styled(IonToolbar)`
    background: ${selectedTemp};
    color: #ffffff;
`;

    return (
        <IonPage>
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Climate
                */}
                <StyledToolbar className="ClimateToolBar">
                    <IonRow>
                        <IonButton
                            fill="clear"
                            color="white"
                            shape="round"
                            onClick={() => dispatch(setPage(Pages.Home))}
                        >
                            <IonIcon src={close} className="XButton" />
                        </IonButton>
                        <IonTitle>Climate</IonTitle>
                    </IonRow>
                </StyledToolbar>
            </IonHeader>

            <IonContent fullscreen className="ModalContent">
                {/*
                DirectionCard is the uppermost button panel which accpets selection of choice 
                of direction of airflow: upper passenger body, lower passenger body, both upper
                and lower, and front of vehicle/windshield. Only one mode may be selected at 
                a time.
                */}
                <IonCard className="DirectionCard" color="light">
                    <IonCardContent className="DirectionSegment">
                        {/*
                        Buttons on the same panel are contained within segments to only allow 
                        one button to be selected at any given time.
                        */}
                        <IonSegment value={selectedDirection} className="DirectionSegment">
                            {/*
                            (Left) button indicating airflow in the upper body direction
                            */}
                            <IonSegmentButton
                                value={Direction.Upper}
                                className="SegmentButton"
                                onClick={() => setSelectedDirection(Direction.Upper)}
                            >
                                {selectedDirection == Direction.Upper ? (
                                    <img src={climateUpperOn} className="ClimateUpperButton" />
                                ) : (
                                    <img src={climateUpper} className="ClimateUpperButton" />
                                )}
                            </IonSegmentButton>

                            {/*
                            (2nd from left) button indicating airflow in the lower body direction
                            */}
                            <IonSegmentButton
                                value={Direction.Lower}
                                className="SegmentButton"
                                onClick={() => setSelectedDirection(Direction.Lower)}
                            >
                                {selectedDirection == Direction.Lower ? (
                                    <img src={climateLowerOn} className="DirectionButton" />
                                ) : (
                                    <img src={climateLower} className="DirectionButton" />
                                )}
                            </IonSegmentButton>

                            {/*
                            (2nd from right) button indicating airflow in the upper and lower body direction
                            */}
                            <IonSegmentButton
                                value={Direction.UpperAndLower}
                                className="SegmentButton"
                                onClick={() => setSelectedDirection(Direction.UpperAndLower)}
                            >
                                {/* {selectedDirection == Direction.UpperAndLower && selectedIntensity != Intensity.off ? ( */}
                                {selectedDirection == Direction.UpperAndLower ? (
                                    <img src={climateUpperAndLowerOn} className="DirectionButton" />
                                ) : (
                                    <img src={climateUpperAndLower} className="DirectionButton" />
                                )}
                            </IonSegmentButton>

                            {/*
                            (Right) button indicating airflow in the windshield's direction
                            */}
                            <IonSegmentButton
                                value={Direction.Front}
                                className="SegmentButton"
                                onClick={() => setSelectedDirection(Direction.Front)}
                            >
                                {selectedDirection == Direction.Front ? (
                                    <img src={climateFrontOn} className="DirectionButton" />
                                ) : (
                                    <img src={climateFront} className="DirectionButton" />
                                )}
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                {/*
                Intensity is the lower button panel which accpets selection of choice of
                intensity of airflow: OFF, 1, 2, 3, and 4. OFF is the least intense with no
                airflow while 4 is the most intense mose. Only one mode may be selected at 
                a time.
                */}
                <IonRange
                    min={0}
                    max={255}
                    className="TempRange"
                    onIonChange={(e) =>
                        setSelectedTemp(
                            'rgb(' + (255 - (e.detail.value as number)) + ', 0, ' + (e.detail.value as number) + ')',
                        )
                    }
                ></IonRange>

                {/*
                Bottom right panel displaying current interior temperature of the vehicle.
                */}
                <IonCard className="TempCard" color="light">
                    <IonLabel color="relectric-light">{currTemp}</IonLabel>
                    <IonLabel color="relectric-light">°C</IonLabel>
                    <IonCol size="1"> </IonCol>
                    <IonIcon src={thermometerOutline} className="Thermometer" color="dark" />
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Climate;
