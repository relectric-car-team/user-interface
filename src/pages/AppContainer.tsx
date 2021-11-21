import React from 'react';
import Home from './Home';
import TabBar from '../components/TabBar';
import FooterBar from '../components/FooterBar';
import ComponentModal from './ComponentModal';
import TopBar from '../components/TopBar';

const AppContainer: React.FC = () => {
    return (
        <>
            <TopBar />
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
