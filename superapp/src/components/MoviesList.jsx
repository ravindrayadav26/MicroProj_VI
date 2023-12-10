import Movie from "./Movies";
import css from "../css/MoviesList.module.css";

/* eslint-disable react/prop-types */
const MoviesList = ({ movies }) => (
  <div className={css.moviesList}>
    {movies.map((movie) => (
      <Movie
        key={movie.id}
        title={movie.title}
        posterPath={movie.poster_path}
      />
    ))}
  </div>
);

export default MoviesList;
