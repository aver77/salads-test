import React from 'react';

import RoutingChain from '../RoutingChain.js/RoutingChain';

import { Provider } from 'react-redux';
import store from '../../redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <RoutingChain/>
        </Provider>
    );
};

export default App;
