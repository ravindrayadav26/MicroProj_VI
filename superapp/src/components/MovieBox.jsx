import { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../css/MovieBox.module.css";
import Error from "../assets/Error.svg";
import SelectGeners from "./SelectGeners";
const MovieBox = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCategoryClick = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(
          (selectedCategory) => selectedCategory !== category
        )
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length >= 3) {
      setErrorMessage("");
    }
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = selectedCategories.filter(
      (selectedCategory) => selectedCategory !== category
    );
    setSelectedCategories(updatedCategories);
  };

  const handleContinue = () => {
    if (selectedCategories.length >= 3) {
      // Save selected categories to local storage
      try {
        localStorage.setItem(
          "selectedCategories",
          JSON.stringify(selectedCategories)
        );
        navigate("/home");
      } catch (error) {
        console.error("Error storing categories in local storage:", error);
      }
      // Navigate to the next page (Replace with the actual next page path)
      // For now, displaying a success message
      setErrorMessage("");
    } else {
      // Display an error message if less than 3 categories are selected
      setErrorMessage("Minimum 3 category required");
    }
  };

  return (
    <div className={css.card}>
      <div className={css.leftContainer}>
        <p className={css.title}>Super app</p>
        <div className={css.leftHeadingBox}>
          <h1 className={css.leftHeading}>
            Choose your entertainment category
          </h1>
        </div>
        <div className={css.selectedCategories}>
          {selectedCategories.map((category) => (
            <div key={category} className={css.selectedCategory}>
              <span>{category}</span>
              <button
                onClick={() => handleRemoveCategory(category)}
                className={css.removeButton}
              >
                X
              </button>
            </div>
          ))}
        </div>
        {errorMessage && (
          <div className={css.errorMessageContainer}>
            <img
              src={Error}
              alt="Danger"
              className={css.dangerImage}
            />
            <p className={css.errorMessage}>{errorMessage}</p>
          </div>
        )}
      </div>

      <div className={css.rightContainer}>
        {[
          "Action",
          "Drama",
          "Romance",
          "Thriller",
          "Western",
          "Horror",
          "Fantasy",
          "Music",
          "Fiction",
        ].map((category) => (
          <SelectGeners
            key={category}
            category={category}
            isSelected={selectedCategories.includes(category)}
            onClick={() => handleCategoryClick(category)}
          />
        ))}

        <button className={css.btn} onClick={handleContinue}>
          Next Page
        </button>
      </div>
    </div>
  );
};
export default MovieBox;
