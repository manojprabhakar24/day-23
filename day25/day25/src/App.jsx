import './App.css';
import React from 'react'
import Login from "./Components/login";
import Dashboard from './Components/Dashboard';
import Button from './Components/Button';
import Card from './Components/card';
import Colour from './Components/colour';
import Borders from './Components/borders';
import Animations from './Components/animations';
import Other from './Components/other';
import Register from './Components/register';
import Forgot from './Components/forgot';
import Notfound from './Components/notfound';
import Blank from './Components/blank';
import Tables from './Components/Tables';
import Charts from './Components/charts';

import {
    BrowserRouter,
    Route,
    Routes,
    } from "react-router-dom";

export default function App () {
  return (
       <div className="APP">


<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/button" element={<Button/>} />
<Route path="/card" element={<Card/>} />
<Route path="/colour" element={<Colour/>} />
<Route path="/borders" element={<Borders/>} />
<Route path="/animations" element={<Animations/>} />
<Route path="/other" element={<Other/>} />
<Route path="/register" element={<Register/>} />
<Route path="/forgot" element={<Forgot/>} />
<Route path="/notfound" element={<Notfound/>} />
<Route path="/blank" element={<Blank/>} />
<Route path="/charts" element={<Charts/>} />
<Route path="/tables" element={<Tables/>} />

</Routes>
</BrowserRouter>
</div>
  );
}


