import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VolumeDiscountSettings from './volume-discount-settings';
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import '@shopify/polaris/build/esm/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppProvider i18n={en}>
    <VolumeDiscountSettings />
    </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
