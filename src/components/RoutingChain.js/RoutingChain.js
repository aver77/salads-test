import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ConfigurePage from '../../pages/ConfigurePage/ConfigurePage';
import ChoosingPage from '../../pages/ChoosingPage.js/ChoosingPage';
import CreatingPage from '../../pages/CreatingPage/CreatingPage';
import BasketPage from '../../pages/BasketPage/BasketPage';
import OrderPage from '../../pages/OrderPage/OrderPage';
import Error from '../Error/Error';

const RoutingChain = () => {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path='/' element={<ConfigurePage/>}/>
                    <Route path='/choosing' element={<ChoosingPage/>}/>
                    <Route path='/creating' element={<CreatingPage/>}/>
                    <Route path='/basket' element={<BasketPage/>}/>
                    <Route path='/history' element={<OrderPage/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            <Footer/>
        </Router>
    );
};

export default RoutingChain;