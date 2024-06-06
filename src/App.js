import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logos from './components/Logos/Logos';
import '@fortawesome/fontawesome-free/css/all.css';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import WebDevelopment from './components/Projects/WebDevelopment/WebDevelopment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SoftwareDevelopment from './components/Projects/SoftwareDevelopment/SoftwareDevelopment';
import MachineLearning from './components/Projects/MachineLearning/MachineLearning';
import Recent from './components/Projects/Recent/Recent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Resume />
        <Logos />
        <Services />
        <Projects />
        <Routes>
          <Route path='/' element={<Recent/>} />
          <Route path='/a' element={<WebDevelopment />} />
          <Route path='/b' element={<SoftwareDevelopment />} />
          <Route path='/c' element={<MachineLearning />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
