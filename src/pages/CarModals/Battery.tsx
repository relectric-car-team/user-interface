import React from 'react';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonSegment,
    IonSegmentButton,
    IonLabel,
} from '@ionic/react';

import './Battery.scss';

const Battery: React.FC = () => {
    return (
        <IonContent>
            {/* Tool bar header for Battery page */}
            <IonHeader>
                <IonToolbar color="#099648" className="BatteryToolBar">
                    <IonTitle>Battery</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        {/* Selection of date for stastics */}
                        <IonCard>
                            <IonSegment value="today">
                                <IonSegmentButton value="month" className="DateSegmentButton">
                                    <IonLabel>Month</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="week" className="DateSegmentButton">
                                    <IonLabel>Week</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="today" className="DateSegmentButton">
                                    <IonLabel>Today</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Battery;
