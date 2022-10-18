import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TvShowDetailsPage from './pages/TvShowDetailsPage';
import SeasonDetailsPage from './pages/SeasonDetailsPage';
import ErrorPage from './pages/404';
import PersonDetailsPage from './pages/PersonDetailsPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/' element={<Home />} />
      <Route path='/movie/:movieId' element={<MovieDetailsPage />} />
      <Route path='/tvshow/:tvShowId' element={<TvShowDetailsPage />} />
      <Route path='/tvshow/:tvShowId/season/:seasonId' element={<SeasonDetailsPage />} />
      <Route path='/person/:personId' element={<PersonDetailsPage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  );
}

export default App;
