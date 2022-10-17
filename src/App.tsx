import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TvShowDetailsPage from './pages/TvShowDetailsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:movieId' element={<MovieDetailsPage />} />
      <Route path='/tvshow/:tvShowId' element={<TvShowDetailsPage />} />
    </Routes>
  );
}

export default App;
