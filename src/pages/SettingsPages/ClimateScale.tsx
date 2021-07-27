import { IonItem, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsCelsius, selectSliderValue } from '../../app/reducersindex';
import { switchMeasurement, updateTemperature } from '../../features/Climate/ClimateStore';

const TempSystemSegment: React.FC = () => {
    const dispatch = useDispatch();

    const isCelsius = useSelector(selectIsCelsius);
    const climateSliderVal = useSelector(selectSliderValue);

    function updateTemperatureScale(segmentValue: string) {
        if (segmentValue != 'celsius') {
            dispatch(switchMeasurement(false));
            dispatch(updateTemperature(climateSliderVal));
        } else {
            dispatch(switchMeasurement(true));
            dispatch(updateTemperature(climateSliderVal));
        }
    }

    function defaultScale() {
        if (isCelsius) {
            return 'celsius';
        } else {
            return 'fahrenheit';
        }
    }

    return (
        <IonItem className="ToggleItem">
            <IonLabel className="ToggleLabel">Temperature Scale</IonLabel>
            <IonSegment
                className="ClimateSymbolSegment"
                onIonChange={(e) => updateTemperatureScale(e.detail.value as string)}
                value={defaultScale()}
            >
                <IonSegmentButton className="ClimateSymbolSegmentButton" value="celsius">
                    <IonLabel>°C</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="ClimateSymbolSegmentButton" value="fahrenheit">
                    <IonLabel>°F</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        </IonItem>
    );
};

export default TempSystemSegment;
