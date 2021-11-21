import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { car, home, musicalNotes, navigate, call } from 'ionicons/icons';
import React from 'react';
import { selectRouter } from '../app/reducersindex';
import Fan from '../assets/icons/fan.svg';
import { Pages } from '../Models/Enums';
import { setPage } from '../features/Routing/RouterStore';
import './FooterBar.scss';

const FooterBar: React.FC = () => {
    const page = useSelector(selectRouter);
    const dispatch = useDispatch();

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
        <IonToolbar>
            <IonGrid className="FooterBarGrid">
                <IonRow className="FooterBarRow">
                    <IonCol size="2" className="FooterBarColumn">
                        <IonRow>
                            <IonButton fill="clear" size="large" shape="round" onClick={() => handleClick(Pages.Home)}>
                                <IonIcon className="FooterBarIcon" icon={home} color="tertiary"></IonIcon>
                            </IonButton>
                        </IonRow>
                    </IonCol>
                    <IonCol size="2" className="FooterBarColumn">
                        <IonRow>
                            <IonButton fill="clear" size="large" shape="round" onClick={() => handleClick(Pages.Car)}>
                                <IonIcon className="FooterBarIcon" icon={car} color="tertiary"></IonIcon>
                            </IonButton>
                        </IonRow>
                    </IonCol>
                    <IonCol size="2" className="FooterBarColumn">
                        <IonRow>
                            <IonButton
                                fill="clear"
                                size="large"
                                shape="round"
                                onClick={() => handleClick(Pages.Climate)}
                            >
                                <IonIcon className="FooterBarIcon" icon={Fan} color="tertiary"></IonIcon>
                            </IonButton>
                        </IonRow>
                    </IonCol>
                    <IonCol size="2" className="FooterBarColumn">
                        <IonRow>
                            <IonButton
                                fill="clear"
                                size="large"
                                shape="round"
                                onClick={() => handleClick(Pages.Navigation)}
                            >
                                <IonIcon className="FooterBarIcon" icon={navigate} color="tertiary"></IonIcon>
                            </IonButton>
                        </IonRow>
                    </IonCol>
                    <IonCol size="2" className="FooterBarColumn">
                        <IonRow>
                            <IonButton fill="clear" size="large" shape="round" onClick={() => handleClick(Pages.Music)}>
                                <IonIcon className="FooterBarIcon" icon={musicalNotes} color="tertiary"></IonIcon>
                            </IonButton>
                        </IonRow>
                    </IonCol>
                    <IonCol size="2" className="FooterBarColumn">
                        <IonRow>
                            <IonButton fill="clear" size="large" shape="round" onClick={() => handleClick(Pages.Home)}>
                                <IonIcon className="FooterBarIcon" icon={call} color="tertiary"></IonIcon>
                            </IonButton>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
};

export default FooterBar;
