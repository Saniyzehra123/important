import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider as ReactProvider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/store';
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.min.js" integrity="sha512-1/8Tj23BRrWnKZXeBruk6wTnsMJbi/lJsk9bsRgVwb6j5q39n0A00gFjbCTaDo5l5XrPVv4DZXftrJExhRF/Ug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactProvider store={store}>

    <App />
 </ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
