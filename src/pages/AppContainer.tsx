import React, { useState } from 'react';
import Home from './Home';
import TabBar from '../components/TabBar';
import { Pages } from '../Models/Enums';
import ComponentModal from './ComponentModal';

const AppContainer: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);

    /**
     * Sets current page for UI. Uncomment the console.log statement to debug
     * @param page Page to set UI to
     */
    const setPage = (page: Pages) => {
        // console.log(page);
        setCurrentPage(page);
    };

    return (
        <>
            {/* Overlaying modal component */}
            <ComponentModal page={currentPage} pageCallback={setPage} />
            {/* Home page */}
            <Home />
            {/* Lower tab bar with icon */}
            <TabBar pageCallback={setPage} currentPage={currentPage} />
        </>
    );
};

export default AppContainer;
