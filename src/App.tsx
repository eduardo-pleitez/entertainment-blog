import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TvShowDetailsPage from './pages/TvShowDetailsPage';
import SeasonDetailsPage from './pages/SeasonDetailsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:movieId' element={<MovieDetailsPage />} />
      <Route path='/tvshow/:tvShowId' element={<TvShowDetailsPage />} />
      <Route path='/tvshow/:tvShowId/season/:seasonId' element={<SeasonDetailsPage />} />
    </Routes>
  );
}

export default App;
