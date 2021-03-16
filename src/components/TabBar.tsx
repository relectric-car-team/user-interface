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
    currentPage: Pages;
}

const TabBar: React.FC<TabBarProps> = (props: TabBarProps) => {
    const handleClick = (button: Pages) => {
        console.log(button);
        if (button === props.currentPage) {
            props.pageCallback(Pages.Home);
        } else {
            props.pageCallback(button);
        }
    };

    return (
        <IonFooter className="TabBar">
            <IonGrid>
                <IonRow className="TabBarRow">
                    <IonCol size="2">
                        <IonButton fill="clear" size="large" shape="round" color="relectric-light">
                            <IonIcon icon={volumeHighOutline} />
                        </IonButton>
                    </IonCol>
                    <IonCol className="IonColMiddle">
                        <IonButton
                            onClick={() => handleClick(Pages.Navigation)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Navigation ? 'relectric-navigation' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={navigateOutline} />
                        </IonButton>
                        <IonButton
                            onClick={() => handleClick(Pages.Car)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Car ? 'relectric-car' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={carOutline} />
                        </IonButton>
                        <IonButton
                            onClick={() => handleClick(Pages.Music)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Music ? 'relectric-music' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={musicalNoteOutline} />
                        </IonButton>
                        <IonButton
                            onClick={() => handleClick(Pages.Settings)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Settings ? 'relectric-music' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={menuOutline} />
                        </IonButton>
                    </IonCol>
                    <IonCol className="IonColRight" size="2">
                        <IonButton
                            onClick={() => handleClick(Pages.Climate)}
                            fill="clear"
                            color={props.currentPage === Pages.Climate ? 'relectric-climate' : 'relectric-light'}
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
};

export default TabBar;
