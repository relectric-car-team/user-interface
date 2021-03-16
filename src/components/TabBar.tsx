import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react';
import { car, musicalNotes, navigate, volumeHigh, filter } from 'ionicons/icons';
import React from 'react';
import { Pages } from '../Models/Enums';
import './TabBar.scss';

interface TabBarProps {
    pageCallback: CallableFunction;
    currentPage: Pages;
}

const TabBar: React.FC<TabBarProps> = (props: TabBarProps) => {
    /**
     * Handles click from NavBar
     * @param button - NavBar button at bottom that was pressed
     */
    const handleClick = (button: Pages) => {
        console.log(button);
        if (button === props.currentPage) {
            props.pageCallback(Pages.Home);
        } else {
            props.pageCallback(button);
        }
    };

    return (
        <IonToolbar className="TabBar">
            {/* Grid to arrange components */}
            <IonGrid onClick={() => console.log('Yet')}>
                <IonRow className="TabBarRow">
                    <IonCol size="2">
                        {/* Volume icon */}
                        <IonButton fill="clear" size="large" shape="round" color="relectric-light">
                            <IonIcon icon={volumeHigh} />
                        </IonButton>
                    </IonCol>
                    <IonCol className="IonColMiddle">
                        {/* Navigation icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Navigation)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Navigation ? 'relectric-navigation' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={navigate} />
                        </IonButton>
                        {/* Car icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Car)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Car ? 'relectric-car' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={car} />
                        </IonButton>
                        {/* Music icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Music)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Music ? 'relectric-music' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={musicalNotes} />
                        </IonButton>
                    </IonCol>
                    <IonCol className="IonColRight" size="2">
                        {/* Climate control icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Climate)}
                            fill="clear"
                            color={props.currentPage === Pages.Climate ? 'relectric-climate' : 'relectric-light'}
                            size="large"
                            shape="round"
                        >
                            <IonIcon icon={filter} />
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
};

export default TabBar;
