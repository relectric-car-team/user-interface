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
import { selectDarkModeActive, selectDisplayModePreference } from '../app/reducersindex';
import { useDispatch, useSelector } from 'react-redux';
import { updateDarkMode, updatePreference } from '../features/DarkMode/DarkModeStore';

const Settings: React.FC = () => {
    const dispatch = useDispatch();
    const darkModeActive = useSelector(selectDarkModeActive);
    const displayPreference = useSelector(selectDisplayModePreference);
    return (
        <IonPage>
            <IonRow className="MainRow">
                <IonCol size="11">
                    <IonRow className="TopRow">
                        <IonCol size="2">
                            <IonLabel className="AppearanceLabel">Appearance:</IonLabel>
                        </IonCol>
                        <IonCol size="10">
                            <IonSegment className="DisplayModeSegment" value={displayPreference}>
                                <IonSegmentButton
                                    value={'auto'}
                                    className="auto"
                                    onClick={() => dispatch(updatePreference('auto'))}
                                ></IonSegmentButton>
                                <IonSegmentButton
                                    value={'dark'}
                                    className="dark"
                                    onClick={() => dispatch(updatePreference('dark'))}
                                ></IonSegmentButton>
                                <IonSegmentButton
                                    value={'light'}
                                    className="light"
                                    onClick={() => dispatch(updatePreference('light'))}
                                ></IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                    <IonRow className="MiddleRow">
                        <IonCol size="2"></IonCol>
                        <IonCol size="10" className="ButtonLabels">
                            {/* <IonSegment className="DisplayModeLabelsSegment" value={darkModeActive ? 'dark' : 'light'}>
                                <IonSegmentButton onClick={() => dispatch(updatePreference('auto'))} value={'auto'}>
                                    Auto
                                </IonSegmentButton>
                                <IonSegmentButton onClick={() => dispatch(updatePreference('dark'))} value={'dark'}>
                                    Dark
                                </IonSegmentButton>
                                <IonSegmentButton onClick={() => dispatch(updatePreference('light'))} value={'light'}>
                                    Light
                                </IonSegmentButton>
                            </IonSegment> */}
                            <IonText className={displayPreference === 'auto' ? 'selected' : ''}>Auto</IonText>
                            <IonText className={displayPreference === 'dark' ? 'selected' : ''}>Dark</IonText>
                            <IonText className={displayPreference === 'light' ? 'selected' : ''}>Light</IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow className="BottomRow">
                        <IonCol size="2">
                            <IonLabel className="TempUnitsLabel">Temperature Units:</IonLabel>
                        </IonCol>
                        <IonCol size="5">
                            <IonToggle className="TempUnitsToggle" />
                            <IonText className="C">C</IonText>
                            <IonText className="F">F</IonText>
                        </IonCol>
                        <IonCol push="3">
                            <div className="Logo" />
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol size="1" className="NextButtonCol">
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
