import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context';
import Navbar from './Components/Navbar';


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Context>
    <App/>
</Context>
</BrowserRouter>
)


