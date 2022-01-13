import React from 'react';
import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRow,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
} from '@ionic/react';
import { close } from 'ionicons/icons';

/**
 * Imports for all custom icons
 */

import './Settings.scss';
import '../theme/Modal.scss';
import '../theme/variables.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux-features/Routing/RouterStore';
import { Pages } from '../Models/Enums';
import DarkMode from './SettingsPages/DarkMode';
import TempSystemSegment from './SettingsPages/ClimateScale';

const Settings: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <IonPage>
            <IonHeader>
                {/**
                 * Blue toolbar with the title of the page: settings
                 */}
                <IonToolbar color="relectric-settings" className="SettingsToolBar">
                    <IonRow>
                        <IonButton
                            fill="clear"
                            color="white"
                            shape="round"
                            onClick={() => dispatch(setPage(Pages.Home))}
                        >
                            <IonIcon src={close} className="XButton" />
                        </IonButton>
                        <IonTitle>Settings</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen={false} className="ModalContent">
                <IonList lines="inset">
                    <DarkMode />
                    <TempSystemSegment />
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Settings;
