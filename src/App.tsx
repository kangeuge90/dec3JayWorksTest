import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import DisplayAwall from './DisplayAwall';
import DisplayJayWorks from './DisplayJayWorks';
import DisplayMezzanineAssembly from './DisplayMezzanineAssembly';
import Nav from './Nav'
import Header from './Header';
import Home from './Home';
import LogIn from './LogIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
      <hr></hr>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
