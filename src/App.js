import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Beranda from './components/pages/Beranda';
import Tutorial from './components/pages/Tutorial';
import Kontak from './components/pages/Kontak';
import Daftar from './components/pages/Daftar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Beranda} />
        <Route path='/beranda' exact component={Beranda} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/kontak' component={Kontak} />
        <Route path='/daftar' component={Daftar} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
