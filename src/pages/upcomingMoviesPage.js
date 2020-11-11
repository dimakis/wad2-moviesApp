import React, { useState, useEffect, useContext } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
import AddToFavoritesButton from '../components/buttons/addToFavorites'

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
            return <AddToFavoritesButton movie={movie} />;
          }}
      />
  );
};

export default UpcomingMoviesListPage;