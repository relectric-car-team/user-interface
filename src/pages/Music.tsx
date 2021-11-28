import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonPage,
    IonRange,
    IonRow,
    IonText,
    IonThumbnail,
    IonTitle,
} from '@ionic/react';
import { playCircle, playSkipBack, playSkipForward, pauseCircle, close } from 'ionicons/icons';
import albumCover from '../assets/album_cover.jpg';
import './Music.scss';
import '../theme/Modal.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux-features/Routing/RouterStore';

import { MusicNotif } from '../components/Notification/Notification';
import { notifActions } from '../components/Notification/NotificationStore';
/**
 * The music tab manages the interaction between the driver
 * and their media player. This tab displays details of the song
 * being played: title, artist, and album. The controls allow
 * for playing/pausing media, sliding to a specific timestamp,
 * and restarting/skipping the current song.
 */
const Music: React.FC = () => {
    const dispatch = useDispatch();
    // dummy variable to represent the total time of the song in seconds
    const seconds = 167;

    /**
     * useStates to manage toggling the play/pause and track
     * current time of the song
     */
    const [isPlaying, setPlayingState] = useState<boolean>();
    const [secPassed, setSecPassed] = useState(0);

    /**
     * useEffect hook to synchronize the time with the bar
     * and acts as a timer for the current song
     */
    useEffect(() => {
        // exit early when we reach 0
        if (secPassed == seconds || !isPlaying) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setSecPassed(secPassed + 1);
        }, 1000);
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [isPlaying, secPassed]);

    /**
     * dummy variables for the current song
     */
    const title = 'Sunset Blvd';
    const artist = 'Kam Prada';
    const album = 'Sunset Blvd';

    /**
     * function that turns integer number of seconds into a string
     * formatted as mm:ss or m:ss
     * @param sec integer number of seconds to turn into a string
     */
    function getSecondsAsDigitalClock(sec: number) {
        const secNum = parseInt(sec.toString(), 10);

        // Note: hours included just in case but hrs not displayed (assumed to be 0)
        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor((secNum - hours * 3600) / 60);
        const seconds = secNum - hours * 3600 - minutes * 60;
        let minutesString = '';
        let secondsString = '';
        minutesString = minutes.toString();
        secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
        return minutesString + ':' + secondsString;
    }

    return (
        <IonPage>
            <IonHeader>
                {/**
                 * Purple toolbar with the title of the page: music
                 */}
                <IonToolbar color="relectric-music" className="MusicToolBar">
                    <IonRow>
                        <IonButton
                            fill="clear"
                            color="white"
                            shape="round"
                            onClick={() => dispatch(setPage(Pages.Home))}
                        >
                            <IonIcon src={close} className="XButton" />
                        </IonButton>
                        <IonTitle>Music</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ModalContent">
                {/**
                 * Create a grid to separate the album cover section (top left) from
                 * the details/button section (top right) and the timebar section (bottom).
                 */}
                <IonGrid className="MusicGrid">
                    {/**
                     * Upper row containing album cover, title, album, artist,
                     * play/pause button,  and skip forward/back buttons
                     */}
                    <IonRow className="InfoButtonRow">
                        {/**
                         * Left column containing album cover
                         */}
                        <IonCol>
                            <IonThumbnail className="AlbumCover">
                                <IonImg src={albumCover} className="AlbumPic" />
                            </IonThumbnail>
                        </IonCol>

                        {/**
                         * Right column containing song details and control buttons
                         */}
                        <IonCol size="5" className="InfoButtonCol">
                            {/** Upper sub-row containing song title, album, and artist */}
                            <IonRow>
                                <IonLabel className="MediaDetailLabel">
                                    <IonTitle className="SongTitle">{title}</IonTitle>
                                    <IonText>{album}</IonText> <br />
                                    <IonText>{artist}</IonText> <br />
                                </IonLabel>
                            </IonRow>

                            {/** Lower sub-row containing control buttons */}
                            <IonRow className="ButtonRow">
                                <IonButton
                                    className="SkipButtons"
                                    fill="clear"
                                    size="large"
                                    shape="round"
                                    color="dark"
                                    onClick={() => setSecPassed(0)}
                                >
                                    <IonIcon icon={playSkipBack} />
                                </IonButton>
                                <IonButton
                                    className="PlayPauseButton"
                                    fill="clear"
                                    size="large"
                                    shape="round"
                                    color="dark"
                                    onClick={() => {
                                        setPlayingState(!isPlaying);
                                        let playing = false;
                                        if (isPlaying === true) {
                                            playing = true;
                                        }
                                        dispatch(
                                            notifActions.spawnNotification({
                                                message: 'It works!',
                                                child: new MusicNotif(albumCover, title, artist, !playing),
                                            }),
                                        );
                                    }}
                                >
                                    {isPlaying ? (
                                        <IonIcon icon={pauseCircle} className="PlayPauseIcon" />
                                    ) : (
                                        <IonIcon icon={playCircle} className="PlayPauseIcon" />
                                    )}
                                </IonButton>

                                <IonButton
                                    className="SkipButtons"
                                    fill="clear"
                                    size="large"
                                    shape="round"
                                    color="dark"
                                    onClick={() => setSecPassed(seconds)}
                                >
                                    <IonIcon icon={playSkipForward} />
                                </IonButton>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/**
                     * Bottom row containing timestamps and time bar
                     */}
                    <IonRow className="TimeRow">
                        <IonText>{getSecondsAsDigitalClock(secPassed)}</IonText>
                        {/** timerComponents.length ? timerComponents : <span>Time's up!</span> */}
                        <IonCol size="0.2"></IonCol>
                        <IonRange
                            min={0}
                            max={seconds}
                            color="dark"
                            className="TimeBar"
                            /* Allows for current time to update bar AND user sliding bar to update current time */
                            value={secPassed}
                            onIonChange={(e) => setSecPassed(e.detail.value as number)}
                        />
                        <IonCol size="0.2"></IonCol>
                        <IonText>{getSecondsAsDigitalClock(seconds)}</IonText>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Music;
