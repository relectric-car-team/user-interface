import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';
import './Navigation.scss';
import '../theme/Modal.scss';
import { ControllerTypes, Pages } from '../Models/Enums';
import { setPage } from '../redux-features/Routing/RouterStore';
import { useDispatch, useSelector } from 'react-redux';
import { selectDispatchSystemsAction } from '../app/reducersindex';
const Navigation: React.FC = () => {
    const dispatch = useDispatch();

    const dispatchSystemsAction = useSelector(selectDispatchSystemsAction);

    const handleClick = () => {
        dispatchSystemsAction &&
            dispatchSystemsAction({ controller: ControllerTypes.BatteryController, data: { percentage: 20 } });
    };

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
            <IonContent fullscreen className="ModalContent">
                <IonButton onClick={handleClick} />
            </IonContent>
        </IonPage>
    );
};

export default Navigation;
