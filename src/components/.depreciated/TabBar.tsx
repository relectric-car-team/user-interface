import { IonButton, IonCol, IonGrid, IonIcon, IonRange, IonRow, IonToolbar } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
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
import { setPage } from '../features/Routing/RouterStore';
import { selectRouter } from '../app/reducersindex';
import Fan from '../assets/icons/fan.svg';
import styled from 'styled-components'; // Needed to have fan icon, AKA climate button, change colour.

// Set up for allowing the fan icon to change colour dynamically.
const StyledButton = styled(IonButton).attrs((props: { color: string }) => ({
    color: props.color,
}))`
    --color: ${(props) => props.color};
`;

const TabBar: React.FC = () => {
    const page = useSelector(selectRouter);
    const dispatch = useDispatch();
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(20);
    const [oldVolume, setOldVolume] = useState<number>(0);

    /**  Selector to get the currently set climate   colour.
     * Currently causes the fan icon to flicker whenever the temperature is adjusted, regardless of if 'fanColour' is being used anywhere else or not.
     * Needs to have an async function made for it to allow it to only call 'useSelector' when the climate page is closed, not every time the climate slider is moved.
     */

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
        if (button === page) {
            dispatch(setPage(Pages.Home));
        } else {
            dispatch(setPage(button));
        }
    };

    return (
        <IonToolbar className="TabBar">
            {/* Grid to arrange components */}
            <IonGrid>
                <IonRow className="TabBarRow">
                    <IonCol size="4">
                        <IonRow className="TabBarCorner Left">
                            {/* Volume icon */}
                            <IonButton fill="clear" size="large" shape="round" color="dark" onClick={handleVolumeMute}>
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
                            color={page === Pages.Navigation ? 'relectric-navigation' : 'tertiary'}
                            shape="round"
                        >
                            <IonIcon icon={navigate} className="TabBarIcon" />
                        </IonButton>
                        {/* Car icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Car)}
                            fill="clear"
                            size="large"
                            color={page === Pages.Car ? 'relectric-car' : 'tertiary'}
                            shape="round"
                        >
                            <IonIcon icon={car} className="TabBarIcon" />
                        </IonButton>
                        {/* Music icon */}
                        <IonButton
                            onClick={() => handleClick(Pages.Music)}
                            fill="clear"
                            size="large"
                            color={page === Pages.Music ? 'relectric-music' : 'tertiary'}
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
                            <StyledButton
                                onClick={() => handleClick(Pages.Climate)}
                                fill="clear"
                                // color={fanColour}
                                size="large"
                                shape="round"
                            >
                                <IonIcon src={Fan} />
                            </StyledButton>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
};

export default TabBar;
