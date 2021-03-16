import React from 'react';
import { IonContent, IonModal } from '@ionic/react';
import { Pages } from '../Models/Enums';
import Music from './Music';
import Car from './Car';
import Climate from './Climate';
import Navigation from './Navigation';
import Settings from './Settings';
import './ComponentModal.scss';

interface ComponentModalProps {
    page: Pages;
    pageCallback: CallableFunction;
}

const ComponentModal: React.FC<ComponentModalProps> = (props: ComponentModalProps) => {
    return (
        <IonContent>
            <IonModal
                isOpen={props.page === Pages.Home ? false : true}
                onDidDismiss={() => {
                    props.pageCallback(Pages.Home);
                }}
                swipeToClose={true}
                cssClass="ComponentModal"
            >
                {props.page == Pages.Music && <Music />}
                {props.page == Pages.Car && <Car />}
                {props.page == Pages.Climate && <Climate />}
                {props.page == Pages.Navigation && <Navigation />}
                {props.page == Pages.Settings && <Settings />}
            </IonModal>
        </IonContent>
    );
};

export default ComponentModal;
