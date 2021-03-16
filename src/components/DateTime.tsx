import { IonContent, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './DateTime.scss';

const DateTime: React.FC = () => {
    const formatTime = (originalTime: string) => {
        const regex = /([0-9]+):([0-9]+):([0-9]+) ([A-Z]+)/;
        const searchResult = originalTime.match(regex);
        let hour = 'Error';
        let minute = 'Error';
        let amPm = 'Error';

        if (searchResult != null) {
            hour = searchResult[1];
            minute = searchResult[2];
            amPm = searchResult[4];
        }

        const updateTime = hour.concat(':' + minute + ' ' + amPm);
        return updateTime;
    };

    const formatDate = (originalDate: string) => {
        let updateMonth = 'Error';
        let updateDate = 'Error';
        let updateYear = 'Error';
        const regexSearch = /([0-9]+)([0-9]+)([0-9]+)/;
        const searchResult = originalDate.match(regexSearch);
        if (searchResult != null) {
            updateMonth = searchResult[2];
            updateDate = searchResult[1];
            updateYear = searchResult[0];
        }

        switch (parseInt(updateMonth)) {
            case 1:
                updateMonth = 'January';
                break;
            case 2:
                updateMonth = 'February';
                break;
            case 3:
                updateMonth = 'March';
                break;
            case 4:
                updateMonth = 'April';
                break;
            case 5:
                updateMonth = 'May';
                break;
            case 6:
                updateMonth = 'June';
                break;
            case 7:
                updateMonth = 'July';
                break;
            case 8:
                updateMonth = 'August';
                break;
            case 9:
                updateMonth = 'September';
                break;
            case 10:
                updateMonth = 'October';
                break;
            case 11:
                updateMonth = 'November';
                break;
            case 12:
                updateMonth = 'December';
                break;
        }

        const returnDate = updateMonth.concat(' ' + updateDate + ', ' + updateYear);
        return returnDate;
    };

    const [currentTime, setTime] = useState(formatTime(new Date().toLocaleTimeString()));
    const [currentDate, setDate] = useState(formatDate(new Date().toLocaleDateString()));

    useEffect(() => {
        const secTimer = setInterval(() => {
            setTime(formatTime(new Date().toLocaleTimeString())), setDate(formatDate(new Date().toLocaleDateString()));
        }, 1000);

        return () => clearInterval(secTimer);
    }, []);

    return (
        <IonContent>
            <IonTitle className="time" size="large">
                {currentTime}
            </IonTitle>
            <IonTitle className="date">{currentDate}</IonTitle>
        </IonContent>
    );
};

export default DateTime;
