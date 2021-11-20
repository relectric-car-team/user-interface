import { IonGrid, IonRow, IonToolbar, IonCol, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './TopBar.scss';
import './DateTime';

const TopBar: React.FC = () => {
    const [currentTime, setTime] = useState<string>();
    const updateTime = () => {
        const d = new Date();
        setTime(
            `${
                d.getHours() > 12 ? (d.getHours() - 12).toString() : d.getHours().toString()
            }:${d.getMinutes().toString().padStart(2, '0')} ${d.getHours() > 12 ? 'PM' : 'AM'}`,
        );
    };

    useEffect(() => {
        // Update time every second
        updateTime();
        const secTimer = setInterval(() => {
            updateTime();
        }, 1000);
        // When component is not rendered stop the timer
        return () => clearInterval(secTimer);
    }, []);

    return (
        <IonToolbar>
            <IonGrid>
                <IonRow>
                    <IonCol size="4">
                        <IonRow></IonRow>
                    </IonCol>
                    <IonCol size="4" className="TimeCol">
                        <IonRow className="TimeCol">
                            <IonTitle className="Time">{currentTime}</IonTitle>
                        </IonRow>
                    </IonCol>
                    <IonCol size="4">
                        <IonRow></IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
};

export default TopBar;
