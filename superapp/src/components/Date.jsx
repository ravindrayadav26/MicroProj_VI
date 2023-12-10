import { useEffect, useState } from "react";
import css from "../css/DateTime.module.css";

/* eslint-disable react/prop-types */
const DateTime = ({ backgroundColor, fontSize, textColor, width }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formatTimeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = currentDateTime.toLocaleDateString(
    "en-US",
    formatDateOptions
  );
  const formattedTime = currentDateTime.toLocaleTimeString(
    "en-US",
    formatTimeOptions
  );

  const dynamicStyles = {
    background: backgroundColor,
    fontSize: fontSize,
    color: textColor,
    width: width,
  };

  return (
    <div className={`${css.datetimeContainer}`} style={dynamicStyles}>
      <div className={css.date}>{formattedDate.replace(/\//g, "-")}</div>
      <div className={css.time}>{formattedTime}</div>
    </div>
  );
};

export default DateTime;
