import { IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { carOutline, menuOutline, musicalNoteOutline, navigateOutline } from 'ionicons/icons';
import React from 'react';

const TabBar: React.FC = () => (
    <IonTabBar slot="bottom">
        <IonTabButton tab="navigation" href="/navigation">
            <IonIcon icon={navigateOutline} />
            <IonLabel>Navigation</IonLabel>
        </IonTabButton>
        <IonTabButton tab="car" href="/car">
            <IonIcon icon={carOutline} />
            <IonLabel>Car</IonLabel>
        </IonTabButton>
        <IonTabButton tab="music" href="/music">
            <IonIcon icon={musicalNoteOutline} />
            <IonLabel>Music</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={menuOutline} />
            <IonLabel>Settings</IonLabel>
        </IonTabButton>
    </IonTabBar>
);

export default TabBar;
