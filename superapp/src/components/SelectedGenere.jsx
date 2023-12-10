import { LocalStorage } from "./LocalStorage";
import css from "../css/SelectedGenere.module.css";

const SelectedGenere = () => {
  const category = LocalStorage("selectedCategories");
  return (
    <div className={css.categoryInfoBox}>
      {category && (
        <ul className={css.categoryCard}>
          {category.map((item, index) => (
            <li key={index} className={css.category}>
              {item}{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedGenere;
