import { useNavigate } from "react-router-dom";
import css from "../css/BrowseBtn.module.css";

const BrowseBtn = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navigate to the /home page when the profileLogo is clicked
    navigate("/browse");
  };
  return (
    <>
      <button className={css.browseBtn} onClick={handleProfileClick}>
        Browse
      </button>
    </>
  );
};

export default BrowseBtn;
