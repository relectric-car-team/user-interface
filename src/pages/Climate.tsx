import React from 'react';
import {
    IonPage,
    IonCard,
    IonSegment,
    IonLabel,
    IonCol,
    IonRow,
    IonButton,
    IonIcon,
    IonSegmentButton,
} from '@ionic/react';

/**
 * Imports for all custom icons
 */
import { thermometerOutline } from 'ionicons/icons';
import { chevronUpOutline } from 'ionicons/icons';
import { chevronDownOutline } from 'ionicons/icons';
import climateUpper from '../assets/icons/climate-upper.svg';
import climateLower from '../assets/icons/climate-lower.svg';
import climateUpperAndLower from '../assets/icons/climate-upper-and-lower.svg';
import climateFront from '../assets/icons/climate-windshield.svg';

/**
 * .scss imports for components
 */
import './Climate.scss';
import '../theme/Modal.scss';

/**
 * Imports for Redux
 */
import { useDispatch, useSelector } from 'react-redux';
import { selectFanIntensity, selectFanDirection, selectTempValue, selectTempSymbol } from '../app/reducersindex';
import {
    Direction,
    updateDirection,
    updateFanIntensity,
    updateTemperature,
} from '../redux-features/Climate/ClimateStore';

const Climate: React.FC = () => {
    const dispatch = useDispatch();

    // Selectors for getting current state of each climate variable from the Redux store
    const selectedTemp = useSelector(selectTempValue);
    const selectedTempSymbol = useSelector(selectTempSymbol);
    const selectedFanIntensity = useSelector(selectFanIntensity);
    const fanDirection = useSelector(selectFanDirection);

    return (
        <IonPage>
            <IonRow>
                <IonCol>
                    <IonCard>
                        <IonLabel className="High">High</IonLabel>
                        <input
                            type="range"
                            min={0}
                            max={4}
                            className="Fan-Intensity-Range"
                            value={selectedFanIntensity}
                            onChange={(e) => dispatch(updateFanIntensity(e.target.value))}
                        />
                        <IonLabel className="OFF">OFF</IonLabel>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                        <IonButton
                            expand="block"
                            fill="clear"
                            color="white"
                            className="Temperature-Button"
                            onClick={() => dispatch(updateTemperature('increase'))}
                        >
                            <IonIcon icon={chevronUpOutline} className="Temperature-Button-Icon" />
                        </IonButton>
                        <IonIcon icon={thermometerOutline} className="Thermometer-Icon" />
                        <IonLabel className="Temperature-Display">
                            {Math.round(selectedTemp)}
                            {selectedTempSymbol}
                        </IonLabel>
                        <IonButton
                            fill="clear"
                            color="white"
                            className="Temperature-Button"
                            onClick={() => dispatch(updateTemperature('decrease'))}
                        >
                            <IonIcon icon={chevronDownOutline} className="Temperature-Button-Icon" />
                        </IonButton>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                        <IonSegment value={fanDirection}>
                            <IonSegmentButton
                                value={Direction.UpperAndLower}
                                onClick={() => {
                                    dispatch(updateDirection(Direction.UpperAndLower));
                                }}
                                className="Fan-Button"
                            >
                                <IonIcon icon={climateUpperAndLower} className="Fan-Direction-Icon" />
                            </IonSegmentButton>
                            <IonSegmentButton
                                value={Direction.Upper}
                                onClick={() => {
                                    dispatch(updateDirection(Direction.Upper));
                                }}
                                className="Fan-Button"
                            >
                                <IonIcon icon={climateUpper} className="Fan-Direction-Icon" />
                            </IonSegmentButton>
                            <IonSegmentButton
                                value={Direction.Lower}
                                onClick={() => {
                                    dispatch(updateDirection(Direction.Lower));
                                }}
                                className="Fan-Button"
                            >
                                <IonIcon icon={climateLower} className="Fan-Direction-Icon" />
                            </IonSegmentButton>
                            <IonSegmentButton
                                value={Direction.Front}
                                onClick={() => {
                                    dispatch(updateDirection(Direction.Front));
                                }}
                                className="Fan-Button"
                            >
                                <IonIcon icon={climateFront} className="Fan-Direction-Icon" />
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonPage>
    );
};

export default Climate;
