import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { close } from 'ionicons/icons';
import './Navigation.scss';
import { Pages } from '../Models/Enums';
import { setPage } from '../redux/Routing/RouterStore';
import { useDispatch, useSelector } from 'react-redux';
import { selectDispatchSystemsAction } from '../redux/NetworkDispatch/NetworkDispatch';

const Navigation: React.FC = () => {
    const dispatch = useDispatch();

    const dispatchSystemsAction = useSelector(selectDispatchSystemsAction);

    const handleClick = () => {
        dispatchSystemsAction && dispatchSystemsAction('5');
    };

    return (
        <IonPage>
            <IonHeader>
                {/*
                This toolbar is the at the tope of the modal and displays the name of the current
                tab being views, i.e. Navigation
                */}
                <IonToolbar color="#608091" className="NavigationToolBar">
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
                {/* <ExploreContainer /> */}
                <IonButton onClick={handleClick} />
            </IonContent>
        </IonPage>
    );
};

export default Navigation;
