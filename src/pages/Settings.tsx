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
import { setPage } from '../features/Routing/RouterStore';
import { Pages } from '../Models/Enums';
import DarkMode from './SettingsPages/DarkMode';

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
                </IonList>
            </IonContent>

            {/* <IonContent className="ModalContent" fullscreen={false}>
                <IonSplitPane disabled={false}>
                    <IonMenu side="start" className="ModalContent">
                        <IonList lines="none">
                            <IonItem className="ToggleItem">
                                <IonLabel className="ToggleLabel">Menu Selection One</IonLabel>
                            </IonItem>
                            <IonItem className="ToggleItem">
                                <IonLabel className="ToggleLabel">Menu Selection Two</IonLabel>
                            </IonItem>
                            <IonItem className="ToggleItem">
                                <IonLabel className="ToggleLabel">Menu Selection Three</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonMenu>
                    <DarkMode />
                </IonSplitPane>
            </IonContent> */}
        </IonPage>
    );
};

export default Settings;
