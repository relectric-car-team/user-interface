import React, { useCallback, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { close } from 'ionicons/icons';
import './Navigation.scss';
import { Pages } from '../Models/Enums';
import { setPage } from '../features/Routing/RouterStore';
import { useDispatch } from 'react-redux';
import MapGl from 'react-map-gl';

const Navigation: React.FC = () => {
    const dispatch = useDispatch();
    const [viewport, setViewport] = useState({
        latitude: 51.0776,
        longitude: -114.1407,
        zoom: 15,
    });
    const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

    return (
        <IonPage>
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Navigation
                */}
                <IonToolbar color="relectric-nagivation" className="NavigationToolBar">
                    <IonRow>
                        <IonButton
                            fill="clear"
                            color="white"
                            shape="round"
                            onClick={() => dispatch(setPage(Pages.Home))}
                        >
                            <IonIcon src={close} className="XButton" />
                        </IonButton>
                        <IonTitle>Navigation</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <MapGl
                    {...viewport}
                    onViewportChange={handleViewportChange}
                    width="100%"
                    height="100%"
                    mapboxApiAccessToken={process.env.MAPBOX_API}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                />
            </IonContent>
        </IonPage>
    );
};

export default Navigation;
