import React from "react";
import PropTypes from "prop-types";
import "./StreakBlock.scss";

const StreakBlock = props => (
  <div>
    <p>
      Current Streak: {props.streak} Day{props.streak !== 1 && "s"}
    </p>
    <button
      className="StreakBlock-updateButton"
      onClick={props.handleClickUpdate}
    >
      Update <span role='img' aria-label="happy-face">😃</span>
    </button>
    <button
      className="StreakBlock-resetButton"
      onClick={props.handleClickReset}
    >
      Reset <span role='img' aria-label="crying-face">😢</span>
    </button>
  </div>
);

StreakBlock.propTypes = {
  streak: PropTypes.number.isRequired,
  handleClickUpdate: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired
};

export default StreakBlock;
