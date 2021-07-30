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
import styled from 'styled-components';

/**
 * Imports for all custom icons
 */
import climateUpper from '../assets/icons/climate-upper.svg';
import climateLower from '../assets/icons/climate-lower.svg';
import climateUpperAndLower from '../assets/icons/climate-upper-and-lower.svg';
import climateFront from '../assets/icons/climate-windshield.svg';
import './Climate.scss';
import '../theme/Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../features/Routing/RouterStore';
import { Pages } from '../Models/Enums';
import {
    selectClimateColour,
    selectDisplayedTemp,
    selectFanDirection,
    selectSliderValue,
    selectTempSymbol,
} from '../app/reducersindex';
import { Direction, updateDirection, updateTemperature } from '../features/Climate/ClimateStore';

const StyledToolbar = styled(IonToolbar).attrs((props: { colour: string }) => ({
    colour: props.colour,
}))`
    --background: ${(props) => props.colour};
    color: #ffffff;
`;

const StyledSegmentButton = styled(IonSegmentButton).attrs((props: { colourChecked: string }) => ({
    colourChecked: props.colourChecked,
}))`
    --color-checked: ${(props) => props.colourChecked};
`;

const StyledCard = styled(IonCard).attrs((props: { colour: string }) => ({
    colour: props.colour,
}))`
    --color: ${(props) => props.colour};
`;

/**
 * The climate tab manages the selection choice of the user for intensity of airflow
 * and direction of airflow. The temperature of the vehicle interior is also displayed
 * on this tab.
 */
const Climate: React.FC = () => {
    const dispatch = useDispatch();
    const selectedTemp = useSelector(selectSliderValue);
    const tempToColour = useSelector(selectClimateColour);
    const temperatureSymbol = useSelector(selectTempSymbol);
    const displayedTemp = useSelector(selectDisplayedTemp);
    const fanDirection = useSelector(selectFanDirection);

    return (
        <IonPage>
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Climate
                */}
                <StyledToolbar colour={tempToColour}>
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
                        <IonSegment value={fanDirection} className="DirectionSegment">
                            {/*
                            (Left) button indicating airflow in the upper body direction
                            */}
                            <StyledSegmentButton
                                value={Direction.Upper}
                                className="SegmentButton"
                                onClick={() => dispatch(updateDirection(Direction.Upper))}
                                colourChecked={tempToColour}
                            >
                                <IonIcon icon={climateUpper} className="ClimateUpperButton" />
                            </StyledSegmentButton>

                            {/*
                            (2nd from left) button indicating airflow in the lower body direction
                            */}
                            <StyledSegmentButton
                                value={Direction.Lower}
                                className="SegmentButton"
                                onClick={() => dispatch(updateDirection(Direction.Lower))}
                                colourChecked={tempToColour}
                            >
                                {/* {fanDirection == Direction.Lower ? (
                                    <StyledIcon icon={climateLower} className="DirectionButton" />
                                ) : ( */}
                                <IonIcon icon={climateLower} className="DirectionButton" />
                                {/* )} */}
                            </StyledSegmentButton>

                            {/*
                            (2nd from right) button indicating airflow in the upper and lower body direction
                            */}
                            <StyledSegmentButton
                                value={Direction.UpperAndLower}
                                className="SegmentButton"
                                onClick={() => dispatch(updateDirection(Direction.UpperAndLower))}
                                colourChecked={tempToColour}
                            >
                                <IonIcon icon={climateUpperAndLower} className="DirectionButton" />
                            </StyledSegmentButton>

                            {/*
                            (Right) button indicating airflow in the windshield's direction
                            */}
                            <StyledSegmentButton
                                value={Direction.Front}
                                className="SegmentButton"
                                onClick={() => dispatch(updateDirection(Direction.Front))}
                                colourChecked={tempToColour}
                            >
                                <IonIcon icon={climateFront} className="DirectionButton" />
                            </StyledSegmentButton>
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
                    max={100}
                    value={selectedTemp}
                    className="TempRange"
                    onIonChange={(e) => dispatch(updateTemperature(e.detail.value as number))}
                ></IonRange>

                {/*
                Bottom right panel displaying current interior temperature of the vehicle.
                */}
                <StyledCard className="TempCard" colour={tempToColour}>
                    <IonLabel color="dark">{displayedTemp}</IonLabel>
                    <IonLabel color="dark">{temperatureSymbol}</IonLabel>
                    <IonCol size="1"> </IonCol>
                    <IonIcon src={thermometerOutline} className="Thermometer" />
                </StyledCard>
            </IonContent>
        </IonPage>
    );
};

export default Climate;
