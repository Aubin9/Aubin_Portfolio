import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';

/*
ReactDOM.render(
    <App/> , 
    document.getElementById('root')
    
    );
*/ //THIS LINE INDICATE THAT

   /**/
   const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    ); 
// ALL THE CONTENT OF THIS FILE SHOULD BE RENDERED IN THE ROOT ID OF THE HTML FILE