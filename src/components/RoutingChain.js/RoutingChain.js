import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ConfigurePage from '../../pages/ConfigurePage/ConfigurePage';
import ChoosingPage from '../../pages/ChoosingPage.js/ChoosingPage';
import CreatingPage from '../../pages/CreatingPage/CreatingPage';

const RoutingChain = () => {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path='/' element={<ConfigurePage/>}/>
                    <Route path='/choosing' element={<ChoosingPage/>}/>
                    <Route path='/creating' element={<CreatingPage/>}/>
                </Routes>
            <Footer/>
        </Router>
    );
};

export default RoutingChain;