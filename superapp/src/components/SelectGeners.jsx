import css from "../css/SelectGeners.module.css";
import Action from "../assets/Action.png";
import Drama from "../assets/Drama.png";
import Fantasy from "../assets/Fantasy.png";
import Fiction from "../assets/Fiction.png";
import Horror from "../assets/Horror.png";
import Music from "../assets/Music.png";
import Romance from "../assets/Romance.png";
import Thriller from "../assets/Thriller.png";
import Western from "../assets/Western.png";

const geners = {
  Action: Action,
  Drama: Drama,
  Fantasy: Fantasy,
  Fiction: Fiction,
  Horror: Horror,
  Music: Music,
  Romance: Romance,
  Thriller: Thriller,
  Western: Western,
  //GenersName: GenersImage
};

// eslint-disable-next-line react/prop-types
const SelectGeners = ({ category, isSelected, onClick }) => {
  const ImageComponent = geners[category];

  return (
    <div
      // eslint-disable-next-line react/prop-types
      className={`${css.box} ${css[category.toLowerCase()]} ${
        isSelected && css.selected
      }`}
      onClick={onClick}
    >
      <div className={css.headingBox}>
        <h3 className={css.heading}>{category}</h3>
      </div>
      <img src={ImageComponent} alt="image" className={css.image} />
    </div>
  );
};

export default SelectGeners;
