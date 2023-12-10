/* eslint-disable no-undef */
import { useState } from "react";
import css from "../css/Timer.module.css";
import UP from "../assets/UP.svg";
import Down from "../assets/Down.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  const [countdownKey, setCountdownKey] = useState(0);

  const toggleTimer = () => {
    if (!isRunning) {
      if (hours > 0 || minutes > 0 || seconds > 0) {
        setIsRunning(true);
        setButtonText("Stop");
      }
    } else {
      setIsRunning(false);
      setButtonText("Start");
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setCountdownKey((prevKey) => prevKey + 1);
    }
  };
  const handleInputChange = (value, maxValue, setValue) => {
    if (value >= 0 && value <= maxValue) {
      setValue(value);
    }
  };

  const formatTwoDigits = (value) => {
    return value.toString().padStart(2, "0");
  };

  const increment = (value, maxValue, setValue) => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const decrement = (value, setValue) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className={css.timerContainer}>
      <div className={css.countDownOuterCircle}>
        <div className={css.countdownCircle}>
          <CountdownCircleTimer
            key={countdownKey}
            isPlaying={isRunning}
            duration={hours * 3600 + minutes * 60 + seconds}
            colors={["#FF6A6A"]}
            size={150}
            onComplete={() => {
              setIsRunning(false);
              setButtonText("Start");
              setHours(0);
              setMinutes(0);
              setSeconds(0);
              setCountdownKey((prevKey) => prevKey + 1);
            }}
          >
            {({ remainingTime }) => (
              <div className={css.timerDisplay}>
                <span>{formatTwoDigits(Math.floor(remainingTime / 3600))}</span>
                :
                <span>
                  {formatTwoDigits(Math.floor((remainingTime % 3600) / 60))}
                </span>
                :<span>{formatTwoDigits(remainingTime % 60)}</span>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
      </div>

      <div className={css.rightCard}>
        <div className={css.timerSection}>
          <div className={css.timerInput}>
            <label className={css.level}>Hours</label>
            <div onClick={() => increment(hours, 24, setHours)}>
              <img
                src={UP}
                alt="incrementLogo"
                className={css.UP}
              />
            </div>
            <input
              type="text"
              readOnly
              value={formatTwoDigits(hours)}
              onChange={(e) =>
                handleInputChange(parseInt(e.target.value, 10), 24, setHours)
              }
              className={css.inputTime}
            />
            <div onClick={() => decrement(hours, setHours)}>
              <img
                src={Down}
                alt="decrementLogo"
                className={css.Down}
              />
            </div>
          </div>
          <div className={css.colon}>:</div>
          <div className={css.timerInput}>
            <label className={css.level}>Minutes</label>
            <div onClick={() => increment(minutes, 60, setMinutes)}>
              <img
                src={UP}
                alt="incrementLogo"
                className={css.UP}
              />
            </div>
            <input
              type="text"
              readOnly
              value={formatTwoDigits(minutes)}
              onChange={(e) =>
                handleInputChange(parseInt(e.target.value, 10), 60, setMinutes)
              }
              className={css.inputTime}
            />
            <div onClick={() => decrement(minutes, setMinutes)}>
              <img
                src={Down}
                alt="decrementLogo"
                className={css.Down}
              />
            </div>
          </div>
          <div className={css.colon}>:</div>
          <div className={css.timerInput}>
            <label className={css.level}>Seconds</label>
            <div onClick={() => increment(seconds, 60, setSeconds)}>
              <img
                src={UP}
                alt="incrementLogo"
                className={css.UP}
              />
            </div>
            <input
              type="text"
              readOnly
              value={formatTwoDigits(seconds)}
              onChange={(e) =>
                handleInputChange(parseInt(e.target.value, 10), 60, setSeconds)
              }
              className={css.inputTime}
            />
            <div onClick={() => decrement(seconds, setSeconds)}>
              <img
                src={Down}
                alt="decrementLogo"
                className={css.Down}
              />
            </div>
          </div>
        </div>

        <div className={css.timerControls}>
          <button onClick={toggleTimer} className={css.timerBtn}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
