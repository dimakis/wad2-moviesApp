import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddToWatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'
import ReviewButton from "../components/buttons/addReview";

const WatchListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchList = context.upcoming.filter( m => m.watchList )
  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"Watch List Movies"}
      action={movie => <ReviewButton movie={movie} />}
    />
  );
};

export default WatchListMoviesPage;