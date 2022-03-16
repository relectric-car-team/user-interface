import React from 'react';
import {
    IonPage,
    IonRow,
    IonButton,
    IonIcon,
    IonToggle,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCol,
    IonText,
    // IonGrid,
    // IonText,
} from '@ionic/react';
import { chevronForward } from 'ionicons/icons';

/**
 * Imports for all custom icons
 */

import './Settings.scss';
import '../theme/Modal.scss';
import '../theme/variables.scss';
// import { setPage } from '../features/Routing/RouterStore';
// import { Pages } from '../Models/Enums';
import { selectDarkModeActive } from '../app/reducersindex';
import { useDispatch, useSelector } from 'react-redux';
import { updateDarkMode } from '../features/DarkMode/DarkModeStore';

const Settings: React.FC = () => {
    const dispatch = useDispatch();
    const darkModeActive = useSelector(selectDarkModeActive);
    return (
        <IonPage>
            <IonRow className="MainRow">
                <IonCol size="10">
                    <IonRow className="TopRow">
                        <IonCol size="3">
                            <IonLabel className="AppearanceLabel">Appearance:</IonLabel>
                        </IonCol>
                        <IonCol size="9">
                            <IonSegment className="DisplayModeSegment" value={darkModeActive ? 'true' : 'false'}>
                                <IonSegmentButton
                                    className="auto"
                                    value={'auto'}
                                    onClick={() => console.log('Cancel Animation')}
                                ></IonSegmentButton>
                                <IonSegmentButton
                                    value={'true'}
                                    className="dark"
                                    onClick={() => dispatch(updateDarkMode(true))}
                                ></IonSegmentButton>
                                <IonSegmentButton
                                    value={'false'}
                                    className="light"
                                    onClick={() => dispatch(updateDarkMode(false))}
                                ></IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                    <IonRow className="MiddleRow">
                        <IonCol size="3"></IonCol>
                        <IonCol size="9">
                            <IonSegment className="DisplayModeLabelsSegment" value={darkModeActive ? 'true' : 'false'}>
                                <IonSegmentButton onClick={() => console.log('auto')} value={'auto'}>
                                    Auto
                                </IonSegmentButton>
                                <IonSegmentButton onClick={() => dispatch(updateDarkMode(true))} value={'true'}>
                                    Dark
                                </IonSegmentButton>
                                <IonSegmentButton onClick={() => dispatch(updateDarkMode(false))} value={'false'}>
                                    Light
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>

                    <IonRow className="BottomRow">
                        <IonCol size="3">
                            <IonLabel className="TempUnitsLabel">Temperature Units:</IonLabel>
                        </IonCol>
                        <IonCol size="6">
                            <IonToggle className="TempUnitsToggle" />
                            <IonText className="C">C</IonText>
                            <IonText className="F">F</IonText>
                        </IonCol>
                        <IonCol push="0">
                            <div className="Logo" />
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol className="NextButtonCol">
                    <IonButton className="NextButton" onClick={() => console.log('Next')}>
                        <IonIcon icon={chevronForward}></IonIcon>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonPage>
        // use IonSlide? https://ionicframework.com/docs/api/slides
    );
};

export default Settings;
