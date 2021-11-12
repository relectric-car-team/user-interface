import React from 'react';
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

import styled from 'styled-components';

/**
 * Imports for all custom icons
 */
import { close } from 'ionicons/icons';
import { thermometerOutline } from 'ionicons/icons';
import climateUpper from '../assets/icons/climate-upper.svg';
import climateLower from '../assets/icons/climate-lower.svg';
import climateUpperAndLower from '../assets/icons/climate-upper-and-lower.svg';
import climateFront from '../assets/icons/climate-windshield.svg';
import { chevronDownOutline } from 'ionicons/icons';

/**
 * .scss imports for components
 */
import './Climate.scss';
import '../theme/Modal.scss';

/**
 * Imports for Redux
 */
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux-features/Routing/RouterStore';
import { Pages } from '../Models/Enums';
import {
    selectClimateColour,
    selectDisplayedTemp,
    selectFanDirection,
    selectSliderValue,
    selectTempSymbol,
} from '../app/reducersindex';
import { Direction, updateDirection, updateTemperature } from '../redux-features/Climate/ClimateStore';

const Climate: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <IonCard className="Intensity">
                            <IonRange
                                min={0}
                                max={100}
                                value={50}
                                className="TempRange"
                                onIonChange={(e: any) => console.log('Chagnes')}
                            ></IonRange>
                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonCard className="Temperature">
                            <IonButton>
                                <IonIcon icon={climateUpper} />
                            </IonButton>
                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonCard className="Fan-Buttons">
                            <IonRow>
                                <IonButton>
                                    <IonIcon icon={chevronDownOutline} />
                                </IonButton>
                            </IonRow>
                            <IonRow>
                                <IonButton>
                                    <IonIcon icon={climateUpper} />
                                </IonButton>
                            </IonRow>
                            <IonRow>
                                <IonButton>
                                    <IonIcon icon={climateLower} />
                                </IonButton>
                            </IonRow>
                            <IonRow>
                                <IonButton>
                                    <IonIcon icon={climateFront} />
                                </IonButton>
                            </IonRow>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Climate;
