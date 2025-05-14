import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextMoviesProvider } from './Components/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter> 
 <ContextMoviesProvider>
 <App />
 </ContextMoviesProvider>


 
 </BrowserRouter>
  

);