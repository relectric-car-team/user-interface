import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ComponentModal.css';

function formatTime(originalTime: string) {
    let updateTime = originalTime;

    if (parseInt(originalTime.substring(0, 2)) > 12) {
        const oldHour = parseInt(originalTime.substring(0, 2));
        const newHour = oldHour - 12;

        updateTime = originalTime.replace(oldHour.toString(), newHour.toString());
    }

    return updateTime;
}

function getTime() {
    const [currentTime, setTime] = useState(formatTime(new Date().toLocaleTimeString()));

    useEffect(() => {
        const secTimer = setInterval(() => {
            setTime(formatTime(new Date().toLocaleTimeString()));
        }, 1000);

        return () => clearInterval(secTimer);
    }, []);

    return currentTime;
}

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
                <div className="time">{getTime()}</div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
