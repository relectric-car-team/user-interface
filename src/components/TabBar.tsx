import { IonButton, IonCol, IonFooter, IonGrid, IonIcon, IonRow } from '@ionic/react';
import {
    carOutline,
    menuOutline,
    musicalNoteOutline,
    navigateOutline,
    volumeHighOutline,
    thermometerOutline,
} from 'ionicons/icons';
import React from 'react';
import { Pages } from '../Models/Enums';
import './TabBar.scss';

interface TabBarProps {
    pageCallback: CallableFunction;
}

const TabBar: React.FC<TabBarProps> = (props: TabBarProps) => (
    <IonFooter className="TabBar">
        <IonGrid>
            <IonRow className="TabBarRow">
                <IonCol size="2">
                    <IonButton fill="clear" size="large" shape="round">
                        <IonIcon icon={volumeHighOutline} />
                    </IonButton>
                </IonCol>
                <IonCol className="IonColMiddle">
                    <IonButton
                        onClick={() => props.pageCallback(Pages.Navigation)}
                        fill="clear"
                        size="large"
                        color="medium"
                        shape="round"
                    >
                        <IonIcon icon={navigateOutline} />
                    </IonButton>
                    <IonButton
                        onClick={() => props.pageCallback(Pages.Car)}
                        fill="clear"
                        size="large"
                        color="medium"
                        shape="round"
                    >
                        <IonIcon icon={carOutline} />
                    </IonButton>
                    <IonButton
                        onClick={() => props.pageCallback(Pages.Music)}
                        fill="clear"
                        size="large"
                        color="medium"
                        shape="round"
                    >
                        <IonIcon icon={musicalNoteOutline} />
                    </IonButton>
                    <IonButton
                        onClick={() => props.pageCallback(Pages.Settings)}
                        fill="clear"
                        size="large"
                        color="medium"
                        shape="round"
                    >
                        <IonIcon icon={menuOutline} />
                    </IonButton>
                </IonCol>
                <IonCol className="IonColRight" size="2">
                    <IonButton
                        onClick={() => props.pageCallback(Pages.Climate)}
                        fill="clear"
                        size="large"
                        shape="round"
                    >
                        <IonIcon icon={thermometerOutline} />
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonFooter>
);

export default TabBar;
