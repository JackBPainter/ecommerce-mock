import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { ContextProvider } from "./Context"

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>,
    document.getElementById('root'));
