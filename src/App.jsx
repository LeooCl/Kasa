import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home.jsx';
import About from '@pages/About.jsx';
import Error from '@pages/error/error.jsx';
import Header from '@layout/Header/Header.jsx';
import Footer from '@layout/Footer/Footer.jsx';
import Appartements from '@pages/Appartements.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<Appartements />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;