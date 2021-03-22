import React from 'react';
import Home from './Home';
import TabBar from '../components/TabBar';
import ComponentModal from './ComponentModal';
import SettingsFab from '../components/SettingsFab';

const AppContainer: React.FC = () => {
    return (
        <>
            {/* Overlaying modal component */}
            <ComponentModal />
            {/* Home page */}
            <Home />
            {/* Lower tab bar with icon */}
            <TabBar />
            {/* Settings floating action button*/}
            <SettingsFab />
        </>
    );
};

export default AppContainer;
