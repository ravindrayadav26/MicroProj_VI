import css from "../css/MovieGeners.module.css";
import MovieList from "./MoviesList";

/* eslint-disable react/prop-types */
const MovieGeners = ({ category, movies }) => (
  <div>
    <h2 className={css.categoryName}>{category}</h2>
    <MovieList movies={movies} />
  </div>
);

export default MovieGeners;
