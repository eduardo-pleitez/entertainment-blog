import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TvShowDetailsPage from './pages/TvShowDetailsPage';
import SeasonDetailsPage from './pages/SeasonDetailsPage';
import ErrorPage from './pages/404';
import PersonDetailsPage from './pages/PersonDetailsPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/' element={<Home />} />
      <Route path='/movie/:movieId' element={<MovieDetailsPage />} />
      <Route path='/tvshow/:tvShowId' element={<TvShowDetailsPage />} />
      <Route path='/tvshow/:tvShowId/season/:seasonId' element={<SeasonDetailsPage />} />
      <Route path='/person/:personId' element={<PersonDetailsPage />} />
    </Routes>
  );
}

export default App;
