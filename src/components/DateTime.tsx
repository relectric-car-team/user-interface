import React, { useEffect, useState } from 'react';
import './DateTime.css';

function formatTime(originalTime: string) {
    let updateTime = originalTime;
    if (parseInt(originalTime.substring(0, 2)) > 12) {
        const oldHour = parseInt(originalTime.substring(0, 2));
        const newHour = oldHour - 12;

        updateTime = originalTime.replace(oldHour.toString(), newHour.toString());
    }

    return updateTime;
}

function formatDate(originalDate: string) {
    let updateMonth = 'Error';
    let updateDate = 'Error';
    let updateYear = 'Error';
    // eslint-disable-next-line prettier/prettier
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
}

function getDateTime() {
    const [currentTime, setTime] = useState(formatTime(new Date().toLocaleTimeString()));
    const [currentDate, setDate] = useState(formatDate(new Date().toLocaleDateString()));

    useEffect(() => {
        const secTimer = setInterval(() => {
            setTime(formatTime(new Date().toLocaleTimeString())), setDate(formatDate(new Date().toLocaleDateString()));
        }, 1000);

        return () => clearInterval(secTimer);
    }, []);

    return (
        <div>
            <div className="time">{currentTime}</div>
            <div className="date">{currentDate}</div>
        </div>
    );
}
const DateTime: React.FC = () => {
    return <div>{getDateTime()}</div>;
};

export default DateTime;
