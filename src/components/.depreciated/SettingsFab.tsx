import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { menu } from 'ionicons/icons';
import { Pages } from '../Models/Enums';
import './TabBar.scss';
import './SettingsFab.scss';
import { setPage } from '../redux-features/Routing/RouterStore';
import { selectRouter } from '../app/reducersindex';
import React from 'react';
const SettingsFab: React.FC = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectRouter);

    const handleClick = (button: Pages) => {
        if (button === page) {
            dispatch(setPage(Pages.Settings));
        } else {
            dispatch(setPage(button));
        }
    };

    return (
        <IonFab vertical="top" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => handleClick(Pages.Settings)} className="FabButton">
                <IonIcon
                    icon={menu}
                    className="TabBarIcon"
                    color={page === Pages.Settings ? 'relectric-settings' : 'tertiary'}
                />
            </IonFabButton>
        </IonFab>
    );
};

export default SettingsFab;
