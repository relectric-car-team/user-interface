import { IonItem, IonLabel, IonToggle } from '@ionic/react';
import React from 'react';

const DarkMode: React.FC = () => {
    {
        /* Used to check the user default setting for dark mode.  */
    }
    const darkModeDefault = window.matchMedia('(prefers-color-scheme)').media == 'dark';

    {
        /* Used to turn dark mode on and off manually with the dark mode toggle */
    }

    const darkModeHandler = () => document.body.classList.toggle('dark');
    return (
        <IonItem className="ToggleItem">
            <IonLabel className="ToggleLabel">Dark Mode</IonLabel>
            <IonToggle className="ToggleButton" onIonChange={darkModeHandler} defaultChecked={darkModeDefault} />
        </IonItem>
    );
};

export default DarkMode;
