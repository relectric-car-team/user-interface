import { IonItem, IonLabel, IonToggle } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkModeActive } from '../../app/reducersindex';
import { updateDarkMode } from '../../features/DarkMode/DarkModeStore';

const DarkMode: React.FC = () => {
    const dispatch = useDispatch();
    const darkModeActive = useSelector(selectDarkModeActive);

    return (
        <IonItem className="ToggleItem">
            <IonLabel className="ToggleLabel">Dark Mode</IonLabel>
            <IonToggle
                className="ToggleButton"
                onIonChange={() => dispatch(updateDarkMode())}
                checked={darkModeActive}
            />
        </IonItem>
    );
};

export default DarkMode;
