// import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
// import Accommodate from './chapter_07/Accommodate';
// import ConfirmButtonClassComponent from './chapter_08/ConfirmButtonClassComponent';
import ConfirmButtonFunctionComponent from './chapter_08/ConfirmButtonFunctionComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // <Library />
    // <CommentList />
    // <NotificationList />
    // <Accommodate />
    // <ConfirmButtonClassComponent />
    <ConfirmButtonFunctionComponent />
);

// setInterval( () => {
//   root.render(
//     <Clock />
//   );  
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();