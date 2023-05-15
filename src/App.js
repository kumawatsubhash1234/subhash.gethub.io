import React from 'react';
import{
  BrowserRouter as Router,
  Routes as Switch,
  Route
}from 'react-router-dom';

import './App.css';
import Home from './componets/Home';
import About from './componets/About';
import Projects from './componets/Projects';
import Expreinces from './componets/Expreinces';
import Contact from './componets/Contact';
import TopNav from './componets/TopNav';



function App() {
  return (
    <div className="App">
    <Router>
     <TopNav ></TopNav>
     <Switch>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Expreinces' element={<Expreinces/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>

     </Switch>
    </Router>
    </div>
  );
}

export default App;
