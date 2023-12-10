import css from "../css/Movies.module.css";

/* eslint-disable react/prop-types */
const Movies = ({ id, title, posterPath }) => {
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div key={id} className={css.movieItem}>
      <img
        src={`${posterBaseUrl}${posterPath}`}
        alt={title}
        className={css.moviePoster}
      />
    </div>
  );
};

export default Movies;
