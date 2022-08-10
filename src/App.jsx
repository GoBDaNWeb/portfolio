import React from 'react';

import {  Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Skills />
    <Work />
  </div>
);

export default App;
