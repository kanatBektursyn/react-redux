import React from "react";
import PropTypes from "prop-types";
import readedSVG from "assets/img/readed.svg";
import noReadedSVG from "assets/img/noreaded.svg";

const IconReaded = ({ isMe, isReaded }) => {
  return (
    isMe &&
    (isReaded ? (
      <img className="message__icon-readed" src={readedSVG} alt="Readed"></img>
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={noReadedSVG}
        alt="Not Readed"
      ></img>
    ))
  );
};

IconReaded.propTypes = {
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool
};

export default IconReaded;
