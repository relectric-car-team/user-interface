import { IonGrid, IonRow, IonToolbar, IonCol, IonTitle, IonIcon, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './TopBar.scss';
import './DateTime';
import { batteryHalfOutline, bluetoothOutline } from 'ionicons/icons';

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

    const batteryPercentage = 52;

    return (
        <IonToolbar className="TopToolbar">
            <IonGrid>
                <IonRow className="TopBarRow">
                    <IonCol size="4">
                        <IonRow>
                            <IonIcon icon={batteryHalfOutline} className="BatteryIcon"></IonIcon>
                            <IonText className="BatteryText">{batteryPercentage}%</IonText>
                        </IonRow>
                    </IonCol>
                    <IonCol size="4">
                        <IonRow>
                            <IonTitle className="Time">{currentTime}</IonTitle>
                        </IonRow>
                    </IonCol>
                    <IonCol size="4">
                        <IonRow className="BluetoothRow">
                            <IonIcon icon={bluetoothOutline} className="BluetoothIcon"></IonIcon>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
};

export default TopBar;
