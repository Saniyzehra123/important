import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const h1 = React.createElement("h1",{className: "redtext bigtext"},"hello")
// const img=React.createElement("img" ,{

 
//   src:"https://images.pexels.com/photos/3287050/pexels-photo-3287050.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})

// const p= React.createElement(
//   "p",
//   { className:"redtext",id:"uniqID"},
//   h1,
//   "test",
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  
     
   
      //  img,
      // p,
  document.getElementById('root')
 
 
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
