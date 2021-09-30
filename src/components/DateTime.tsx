import { IonContent, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './DateTime.scss';

const DateTime: React.FC = () => {
    const [currentTime, setTime] = useState<string>();
    const [currentDate, setDate] = useState<string>();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const updateDateTime = () => {
        // New Date object
        const d = new Date();
        // Set date using `d`
        setDate(months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear());
        // Format time using `d`
        setTime(
            `${d.getHours() > 12 ? (d.getHours() - 12).toString() : d.getHours().toString()}
            :${d.getMinutes().toString().padStart(2, '0')} ${d.getHours() > 12 ? 'PM' : 'AM'}`,
        );
    };

    useEffect(() => {
        // Update date and time every second
        updateDateTime();
        const secTimer = setInterval(() => {
            updateDateTime();
        }, 1000);
        // When component is not rendered stop the timer
        return () => clearInterval(secTimer);
    }, []);

    return (
        <IonContent fullscreen={true} color="light">
            <IonTitle className="time" size="large">
                {currentTime}
            </IonTitle>
            <IonTitle className="date">{currentDate}</IonTitle>
        </IonContent>
    );
};

export default DateTime;
