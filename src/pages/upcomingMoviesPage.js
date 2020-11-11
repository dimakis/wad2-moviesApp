import React, { useState, useEffect, useContext } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
import AddToWatchListButton from '../components/buttons/addToWatchList'

const UpcomingMoviesListPage = () => {
    const context = useContext(MoviesContext);
    const upcomingMovies = context.upcoming.filter((m) => {
        return !("watchList" in m);
    });



  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={upcomingMovies}
        action={(movie) => {
            return <AddToWatchListButton movie={movie} />;
          }}
      />
  );
};

export default UpcomingMoviesListPage;