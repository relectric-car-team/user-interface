import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ComponentModal from './ComponentModal';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                        {/* TODO: Add time here */}
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Home" />
                <ComponentModal />
            </IonContent>
        </IonPage>
    );
};

export default Home;
