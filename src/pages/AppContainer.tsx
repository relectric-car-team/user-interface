import React from 'react';
import Home from './Home';
import FooterBar from '../components/FooterBar';
import ComponentModal from './ComponentModal';
import TopBar from '../components/HeaderBar';
import Notification from '../components/Notification/Notification';

const AppContainer: React.FC = () => {
    return (
        <>
            <TopBar />
            <Notification />
            {/* Overlaying modal component */}
            <ComponentModal />
            {/* Home page */}
            <Home />
            {/* Lower tab bar with icon */}
            <FooterBar />
            {/* Settings floating action button*/}
        </>
    );
};

export default AppContainer;
