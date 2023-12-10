import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "./Error";
import css from "../css/MainContent.module.css";
import MovieGeners from "./MovieGeners";
import profilepic from "../assets/profilepic.png";

const MainContent = () => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "f971f69e0a0d4401a859abc8973549eb";

  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navigate to the /home page when the profilepic is clicked
    navigate("/home");
  };

  useEffect(() => {
    const fetchGenreList = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: {
              api_key: apiKey,
            },
          }
        );

        const genreMap = {};
        response.data.genres.forEach((genre) => {
          genreMap[genre.name] = genre.id;
        });

        return genreMap;
      } catch (error) {
        console.error("Error fetching genre list:", error.message);
        throw error;
      }
    };

    const fetchMoviesByCategories = async () => {
      try {
        const storedCategories = localStorage.getItem("selectedCategories");
        if (!storedCategories) {
          setLoading(false);
          setError("No selected categories found in localStorage.");
          return;
        }

        const selectedCategories = JSON.parse(storedCategories);

        const genreMap = await fetchGenreList();

        const moviePromises = selectedCategories.map(async (category) => {
          const response = await axios.get(
            "https://api.themoviedb.org/3/discover/movie",
            {
              params: {
                api_key: apiKey,
                with_genres: genreMap[category],
              },
            }
          );

          return {
            category,
            movies: response.data.results.slice(6, 10),
          };
        });

        const moviesByCategory = await Promise.all(moviePromises);
        setMoviesByCategory(
          moviesByCategory.reduce((acc, { category, movies }) => {
            acc[category] = movies;
            return acc;
          }, {})
        );

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError("Error fetching movies. Please try again later.");
        <p className={css.error}>{error}</p>;
        setLoading(false);
      }
    };

    fetchMoviesByCategories();
  }, [apiKey]);

  return (
    <>
      <div className={css.browseContainer}>
        <div className={css.topCard}>
          <p className={css.appLogo}>Super app</p>
          <img
            src={profilepic}
            alt="profileimage"
            className={css.profilepic}
            onClick={handleProfileClick}
          />
        </div>
        <div>
          <h3 className={css.title}>
            Entertainment according to your choice
          </h3>
          <Error loading={loading} error={error}>
            <div className={css.moviesContainer}>
              {Object.entries(moviesByCategory).map(([category, movies]) => (
                <MovieGeners
                  key={category}
                  category={category}
                  movies={movies}
                />
              ))}
            </div>
          </Error>
        </div>
      </div>
    </>
  );
};

export default MainContent;
