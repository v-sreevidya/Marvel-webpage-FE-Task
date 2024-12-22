import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Marvelstudios from './Components/Marvel/Marvelstudios';
import Avengers from './Components/Avengers/Avengers';





const App = () => {
  return (
    <div>
    <Header/>
    <Marvelstudios/>
    <Avengers/>
    </div>
  );
};

export default App;
