// import React from 'react'
import Heading from "../components/Heading";
import InputField from "../components/Input";
import css from "../css/Registration.module.css";

const Registration = () => {
  return (
    <>
      <div className={css.register}>
        <Heading />
        <InputField />
      </div>
    </>
  );
};

export default Registration;
