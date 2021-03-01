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
} from '@ionic/react';

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
import './Climate.css';

/**
 * Enums for consistent identification of the direction mode selected
 */
enum Direction {
    Upper = 'Upper',
    Lower = 'Lower',
    UpperAndLower = 'UpperAndLower',
    Front = 'Front',
}

/**
 * Enums for consistent identification of the intensity mode selected
 */
enum Intensity {
    off = 'OFF',
    one = '1',
    two = '2',
    three = '3',
    four = '4',
}

/**
 * The climate tab manages the selection choice of the user for intensity of airflow
 * and direction of airflow. The temperature of the vehicle interior is also displayed
 * on this tab.
 */
const Climate: React.FC = () => {
    const [selectedDirection, setSelectedDirection] = useState<Direction>();
    const [selectedIntensity, setSelectedIntensity] = useState<Intensity>();

    // dummy varaible to represent interior temperature measurement
    const temp = 22;

    return (
        <IonPage>
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Climate
                */}
                <IonToolbar color="#D99648" className="ClimateToolBar">
                    <IonTitle size="large" color="white">
                        Climate
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle>Climate</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/*
                DirectionCard is the uppermost button panel which accpets selection of choice 
                of direction of airflow: upper passenger body, lower passenger body, both upper
                and lower, and front of vehicle/windshield. Only one mode may be selected at 
                a time.
                */}
                <IonCard className="DirectionCard" color="light">
                    <IonCardContent>
                        {/*
                        Buttons on the same panel are contained within segments to only allow 
                        one button to be selected at any given time.
                        */}
                        <IonSegment value={selectedDirection}>
                            {/*
                            (Left) button indicating airflow in the upper body direction
                            */}
                            <IonSegmentButton
                                value={Direction.Upper}
                                className="SegmentButton"
                                onClick={() => setSelectedDirection(Direction.Upper)}
                            >
                                {selectedDirection == Direction.Upper && selectedIntensity != Intensity.off ? (
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
                                {selectedDirection == Direction.Lower && selectedIntensity != Intensity.off ? (
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
                                {selectedDirection == Direction.UpperAndLower && selectedIntensity != Intensity.off ? (
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
                                {selectedDirection == Direction.Front && selectedIntensity != Intensity.off ? (
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
                <IonCard className="IntensityCard" color="light">
                    <IonCardContent>
                        {/*
                        Buttons on the same panel are contained within segments to only allow 
                        one button to be selected at any given time.
                        */}
                        <IonSegment value={selectedIntensity}>
                            {/*
                            (Left) button indicating airflow is off
                            */}
                            <IonSegmentButton
                                value={Intensity.off}
                                className="SegmentButton"
                                onClick={() => setSelectedIntensity(Intensity.off)}
                            >
                                <IonLabel>OFF</IonLabel>
                            </IonSegmentButton>

                            {/*
                            (2nd from left) button indicating airflow is low; intensity = 1
                            */}
                            <IonSegmentButton
                                value={Intensity.one}
                                className="SegmentButton"
                                onClick={() => setSelectedIntensity(Intensity.one)}
                            >
                                <IonLabel>1</IonLabel>
                            </IonSegmentButton>

                            {/*
                            (Middle) button indicating airflow is medium; intensity = 2
                            */}
                            <IonSegmentButton
                                value={Intensity.two}
                                className="SegmentButton"
                                onClick={() => setSelectedIntensity(Intensity.two)}
                            >
                                <IonLabel>2</IonLabel>
                            </IonSegmentButton>

                            {/*
                            (2nd from right) button indicating airflow is med-high; intensity = 3
                            */}
                            <IonSegmentButton
                                value={Intensity.three}
                                className="SegmentButton"
                                onClick={() => setSelectedIntensity(Intensity.three)}
                            >
                                <IonLabel>3</IonLabel>
                            </IonSegmentButton>

                            {/*
                            (Right) button indicating airflow is high; intensity = 4
                            */}
                            <IonSegmentButton
                                value={Intensity.four}
                                className="SegmentButton"
                                onClick={() => setSelectedIntensity(Intensity.four)}
                            >
                                <IonLabel>4</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                {/*
                Bottom right panel displaying current interior temperature of the vehicle.
                */}
                <IonCard className="TempCard" color="light">
                    <IonLabel color="medium">{temp}</IonLabel>
                    <IonLabel color="medium">°C</IonLabel>
                    <IonCol size="1"> </IonCol>
                    <img src={fan} className="Fan" />
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Climate;
