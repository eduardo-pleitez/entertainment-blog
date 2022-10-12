import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:movieId' element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
