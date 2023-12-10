import css from "../css/Heading.module.css";

const Heading = () => {
  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.leftContainer}>
          <p className={css.heading}>Discover new things on Superapp</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
