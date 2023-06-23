import React from "react";
import api from "../../api";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
const comments = api.comments.fetchAll();
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if ([2, 3, 4].indexOf(lastOne) > 0);
    if ([1].indexOf(lastOne) > 0);
    if (number > 1 && number < 5) return "вопроса задано";
    if (number === 1) return "вопрос задан";
    if (number > 10 && number < 15) return "вопросов задано";
    return "вопросов задано";
  };
  return (
    <h2>
      <span
        className={"badge bg-" + (comments.length > 0 ? "primary" : "danger")}
      >
        {comments.length > 0
          ? `Уже ${comments.length} ${renderPhrase(comments.length)}`
          : "вопросов сегдня нет"}
      </span>
    </h2>
  );
};
SearchStatus.propTypes = {
  length: PropTypes.number,
};
export default SearchStatus;