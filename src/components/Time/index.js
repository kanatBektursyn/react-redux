import React, { Fragment } from "react";
import propTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => {
  return (
    <Fragment>
      {formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}
    </Fragment>
  );
};

Time.propTypes = {
  date: propTypes.string
};

export default Time;
