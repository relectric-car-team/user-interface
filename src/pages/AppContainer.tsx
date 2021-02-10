import React, { useState } from 'react';
import Home from './Home';
import TabBar from '../components/TabBar';
import { Pages } from '../Models/Enums';
import ComponentModal from './ComponentModal';

const AppContainer: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);

    const setPage = (page: Pages) => {
        console.log(page);
        setCurrentPage(page);
    };

    return (
        <>
            <ComponentModal page={currentPage} pageCallback={setPage} />
            <Home />
            <TabBar pageCallback={setPage} />
        </>
    );
};

export default AppContainer;
