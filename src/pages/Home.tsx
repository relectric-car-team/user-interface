import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ComponentModal.css';

function formatTime(originalTime: string) {
    let updateTime = originalTime;
<<<<<<< refs/remotes/origin/main
=======

>>>>>>> Added React hook for getting the current time to display on the home page, updating every second. Set CSS formatting to make the time appear in the middle of the screen with a color matching the theme. All code for the time hook is located in the home page, but could definitely be moved. CSS code might need to be moved to its own file - it is currently stored in the ComponentModal.css file.
    if (parseInt(originalTime.substring(0, 2)) > 12) {
        const oldHour = parseInt(originalTime.substring(0, 2));
        const newHour = oldHour - 12;

        updateTime = originalTime.replace(oldHour.toString(), newHour.toString());
    }

    return updateTime;
}

<<<<<<< refs/remotes/origin/main
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
=======
function getTime() {
    const [currentTime, setTime] = useState(formatTime(new Date().toLocaleTimeString()));

    useEffect(() => {
        const secTimer = setInterval(() => {
            setTime(formatTime(new Date().toLocaleTimeString()));
>>>>>>> Added React hook for getting the current time to display on the home page, updating every second. Set CSS formatting to make the time appear in the middle of the screen with a color matching the theme. All code for the time hook is located in the home page, but could definitely be moved. CSS code might need to be moved to its own file - it is currently stored in the ComponentModal.css file.
        }, 1000);

        return () => clearInterval(secTimer);
    }, []);

<<<<<<< refs/remotes/origin/main
    return (
        <div>
            <div className="time">{currentTime}</div>
            <div className="date">{currentDate}</div>
        </div>
    );
=======
    return currentTime;
>>>>>>> Added React hook for getting the current time to display on the home page, updating every second. Set CSS formatting to make the time appear in the middle of the screen with a color matching the theme. All code for the time hook is located in the home page, but could definitely be moved. CSS code might need to be moved to its own file - it is currently stored in the ComponentModal.css file.
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
                    </IonToolbar>
                </IonHeader>
<<<<<<< refs/remotes/origin/main
                <div>{getDateTime()}</div>
=======
                <div className="time">{getTime()}</div>
>>>>>>> Added React hook for getting the current time to display on the home page, updating every second. Set CSS formatting to make the time appear in the middle of the screen with a color matching the theme. All code for the time hook is located in the home page, but could definitely be moved. CSS code might need to be moved to its own file - it is currently stored in the ComponentModal.css file.
            </IonContent>
        </IonPage>
    );
};

export default Home;
