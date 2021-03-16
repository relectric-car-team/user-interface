import React from 'react';
import Home from './Home';
import TabBar from '../components/TabBar';
import ComponentModal from './ComponentModal';

const AppContainer: React.FC = () => {
    return (
        <>
            {/* Overlaying modal component */}
            <ComponentModal />
            {/* Home page */}
            <Home />
            {/* Lower tab bar with icon */}
            <TabBar />
        </>
    );
};

export default AppContainer;
