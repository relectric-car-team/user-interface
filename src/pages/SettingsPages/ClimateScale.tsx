import { IonItem, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsCelsius } from '../../app/reducersindex';
import { switchMeasurement, updateTemperature } from '../../redux-features/Climate/ClimateStore';

const TempSystemSegment: React.FC = () => {
    const dispatch = useDispatch();

    const isCelsius = useSelector(selectIsCelsius);

    function updateTemperatureScale(segmentValue: string) {
        if (segmentValue != 'celsius') {
            dispatch(switchMeasurement(false));
        } else {
            dispatch(switchMeasurement(true));
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
