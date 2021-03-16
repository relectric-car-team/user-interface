import { IonButton, IonCol, IonGrid, IonIcon, IonRange, IonRow, IonToolbar } from '@ionic/react';
import {
    car,
    musicalNotes,
    navigate,
    volumeHigh,
    volumeMedium,
    volumeLow,
    volumeOff,
    volumeMute,
} from 'ionicons/icons';
import React, { useState } from 'react';
import { Pages } from '../Models/Enums';
import './TabBar.scss';
import fan from '../assets/icons/fan.png';

interface TabBarProps {
    pageCallback: CallableFunction;
    currentPage: Pages;
}

const TabBar: React.FC<TabBarProps> = (props: TabBarProps) => {
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(20);
    const [oldVolume, setOldVolume] = useState<number>(0);

    const handleVolumeMute = () => {
        if (isMuted) {
            setIsMuted(false);
            setVolume(oldVolume);
        } else {
            setIsMuted(true);
            setOldVolume(volume);
            setVolume(0);
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
    };

    const calculateVolume = (): string => {
        if (isMuted) {
            return volumeMute;
        } else if (volume === 0) {
            return volumeOff;
        } else if (volume <= 33) {
            return volumeLow;
        } else if (volume <= 66) {
            return volumeMedium;
        } else {
            return volumeHigh;
        }
    };

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
                    <IonCol size="4">
                        <IonRow className="TabBarCorner Left">
                            {/* Volume icon */}
                            <IonButton
                                fill="clear"
                                size="large"
                                shape="round"
                                color="relectric-light"
                                onClick={handleVolumeMute}
                            >
                                <IonIcon icon={calculateVolume()} className="TabBarIcon" />
                            </IonButton>
                            {/* Volume slider */}
                            <IonRange
                                min={0}
                                max={100}
                                className="IntensityRange"
                                color="dark"
                                value={volume}
                                onIonChange={(e) => handleVolumeChange(e.detail.value as number)}
                            />
                        </IonRow>
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
                            <IonIcon icon={navigate} className="TabBarIcon" />
                        </IonButton>
                        {/* Car icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Car)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Car ? 'relectric-car' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={car} className="TabBarIcon" />
                        </IonButton>
                        {/* Music icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Music)}
                            fill="clear"
                            size="large"
                            color={props.currentPage === Pages.Music ? 'relectric-music' : 'relectric-light'}
                            shape="round"
                        >
                            <IonIcon icon={musicalNotes} className="TabBarIcon" />
                        </IonButton>
                    </IonCol>
                    <IonCol className="IonColRight" size="4">
                        <IonRow className="TabBarCorner Right">
                            {/* Fan speed selector */}
                            <IonRange min={0} max={4} snaps={true} className="IntensityRange" color="dark" />
                            {/* Climate control icon */}
                            <IonButton
                                onClick={() => handleClick(Pages.Climate)}
                                fill="clear"
                                color={props.currentPage === Pages.Climate ? 'relectric-climate' : 'relectric-light'}
                                size="large"
                                shape="round"
                            >
                                {/* TODO: Import custom Fan SVG */}
                                <img src={fan} className="Fan" />
                            </IonButton>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
};

export default TabBar;
