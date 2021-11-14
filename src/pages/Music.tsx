import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRange,
    IonRow,
    IonText,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter,
} from '@ionic/react';
import { playCircle, playSkipBack, playSkipForward, pauseCircle, close } from 'ionicons/icons';
import albumCover from '../assets/album_cover.jpg';
import './Music.scss';
import '../theme/Modal.scss';
import { Pages } from '../Models/Enums';
import { useDispatch } from 'react-redux';
import { setPage } from '../features/Routing/RouterStore';

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
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="6">
                            <IonContent className="songStyling">
                                <IonList className="songListStyling" lines="none">
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton expand="block" size="large" fill="solid" color="dark">
                                            <IonHeader className="songNameStyling">
                                                {title}
                                                <IonTitle>{artist}</IonTitle>
                                            </IonHeader>
                                            <IonThumbnail>
                                                <IonImg src={albumCover} className="songListPic" />
                                            </IonThumbnail>
                                            <IonTitle>{getSecondsAsDigitalClock(seconds)}</IonTitle>
                                        </IonButton>
                                    </IonItem>
                                </IonList>
                            </IonContent>
                        </IonCol>
                        <IonCol size="6" className="dimensionControl">
                            <IonRow>
                                <IonLabel className="MediaDetailLabel">
                                    <IonTitle className="SongTitle">{title}</IonTitle>
                                </IonLabel>
                            </IonRow>
                            <IonRow>
                                <IonThumbnail className="AlbumCover">
                                    <IonImg src={albumCover} className="AlbumPic" />
                                </IonThumbnail>
                            </IonRow>
                            <IonRow className="TimeRow">
                                <IonCol size="0.2"></IonCol>
                                <IonRange
                                    min={0}
                                    max={seconds}
                                    color="dark"
                                    className="TimeBar"
                                    value={secPassed}
                                    onIonChange={(e) => setSecPassed(e.detail.value as number)}
                                />
                                <IonCol size="0.2"></IonCol>
                                <IonText>{getSecondsAsDigitalClock(seconds)}</IonText>
                            </IonRow>
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
                                    onClick={() => setPlayingState(!isPlaying)}
                                >
                                    {isPlaying ? (
                                        <IonIcon icon={pauseCircle} className="PlayPauseIcon" />
                                    ) : (
                                        <IonIcon icon={playCircle} className="PlayPauseIcon" />
                                    )}
                                </IonButton>
                                <IonButton
                                    className="SkipButtons2"
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
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Music;
