import css from "../css/Home.module.css";
import ProfileInfo from "../components/Profile";
import Datetime from "../components/Date";
import Weather from "../components/Weather";
import NewsCard from "../components/News";
import Notes from "../components/Notes";
import Timer from "../components/Timer";
import BrowseBtn from "../components/BrowseBtn";

const Home = () => {
  return (
    <>
      <div className={css.home}>
        <div className={css.leftCard}>
          <div className={css.leftTopCard}>
            <div className={css.profileDateTime}>
              {/* ProfileInfo  */}
              <div>
                <ProfileInfo />
              </div>
              {/* Datetime and Weather */}
              <div>
                <Datetime />
                <Weather />
              </div>
            </div>

            {/* Notes */}
            <div className={css.notesCard}>
              <Notes />
            </div>
          </div>

          {/* Timer  */}
          <div className={css.leftBottomCard}>
            <Timer />
          </div>
        </div>

        {/* NewsCard and BrowseBtn */}
        <div className={css.rightCard}>
          <NewsCard />
          <BrowseBtn />
        </div>
      </div>
    </>
  );
};

export default Home;
