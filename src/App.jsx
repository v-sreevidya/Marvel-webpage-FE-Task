import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Marvelstudios from './Components/Marvel/Marvelstudios';
import Avengers from './Components/Avengers/Avengers';
import ThorPage from './Components/Thor/ThorPage';
import IronPage from './Components/Iron/IronPage';
import CaptainPage from './Components/Captain/CaptainPage';
import HulkPage from './Components/Hulk/HulkPage';
import BlackPage from './Components/Black/BlackPage';
import SpiderPage from './Components/Spider/SpiderPage';
import Contactus from './Components/Contactus';
import Navbar from './Components/Navbar';



const App = () => {
  return (
    
    <Router>
    <Navbar/>
    <Routes>
      
    <Route
          path="/"
          element={
            <>
              <Header />
              <Marvelstudios />
              <Avengers />
            </>
          }
        />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path='/thor' element={<ThorPage />}/>
      <Route path="/iron" element={<IronPage />} />
      <Route path="/captain" element={<CaptainPage />} />
      <Route path="/hulk" element={<HulkPage />} />
      <Route path="/black" element={<BlackPage />} />
      <Route path="/spider" element={<SpiderPage />} />
     
    </Routes>
    </Router>
  );
};

export default App;
