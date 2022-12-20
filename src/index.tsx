import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MyHeader title={'Vincent VAUBAN'} punchline={'VV TGV'}/>
    <MyNav/>
    <App />
    <MyFooter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
