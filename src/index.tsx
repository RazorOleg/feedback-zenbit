import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./localization/i18n";
import './index.css';
import {Provider} from "react-redux";
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";


const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
        <Provider store={store}>
               <App />
        </Provider>
);
