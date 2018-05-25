import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";

const store=createStore(
    combineReducers({// combinereducer contain multiple reducers
        links:()=>{ //links is reducer which return data
            return [{id:'1234',
             title:'this is title',
            destination:'https://dest.com',
            shortURL:'https://de.ss'
    }]
        }
    })
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
