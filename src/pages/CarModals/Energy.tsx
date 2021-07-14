import React from 'react';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSegment,
    IonLabel,
    IonSegmentButton,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/react';
import './Energy.scss';

const Energy: React.FC = () => {
    return (
        <IonContent scrollY={false}>
            <IonHeader>
                <IonToolbar color="#099648" className="EnergyToolBar">
                    <IonTitle>Energy</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow>
                    <IonCol>
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

export default Energy;
