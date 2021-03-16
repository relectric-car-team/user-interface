import React, { useEffect, useState } from 'react';
import { IonContent, IonModal } from '@ionic/react';
import { useSelector } from 'react-redux';
import { Pages } from '../Models/Enums';
import { selectRouter } from '../features/Routing/RouterStore';
import Music from './Music';
import Car from './Car';
import Climate from './Climate';
import Navigation from './Navigation';
import Settings from './Settings';
import './ComponentModal.scss';

const ComponentModal: React.FC = () => {
    const page = useSelector(selectRouter);
    const [savedPage, setSavedPage] = useState<Pages>(Pages.Home);

    useEffect(() => {
        if (page !== Pages.Home) setSavedPage(page);
    }, [page]);

    return (
        <IonContent>
            {/* Default Ionic modal component */}
            <IonModal
                isOpen={page === Pages.Home ? false : true}
                onDidDismiss={() => {
                    // props.pageCallback(Pages.Home);
                    setSavedPage(Pages.Home);
                }}
                swipeToClose={true}
                cssClass="ComponentModal"
                showBackdrop={false}
            >
                {/* Choose which page to render based on selected page */}
                {savedPage == Pages.Music && <Music />}
                {savedPage == Pages.Car && <Car />}
                {savedPage == Pages.Climate && <Climate />}
                {savedPage == Pages.Navigation && <Navigation />}
                {savedPage == Pages.Settings && <Settings />}
            </IonModal>
        </IonContent>
    );
};

export default ComponentModal;
