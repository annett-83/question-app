import React from "react";
import PropTypes from "prop-types";
import Answer from "./answer";

const AnswerList = ({ answers, onRemove }) => {
    return answers.map((answer) => (
        <Answer key={answer._id} {...answer} onRemove={onRemove} />
    ));
};
AnswerList.propTypes = {
    answer: PropTypes.array,
    onRemove: PropTypes.func
};

export default AnswerList;
