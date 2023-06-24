import React from "react";
import PropTypes from "prop-types";
const Subject = ({ _id, color, name }) => {
    return (
        <span className={"badge m-1 bg-" + color} >
            {name}
        </span>
    );
    // return "something";
};
Subject.propTypes = {
    _id: PropTypes.string.isRequired,
    color: PropTypes.string,
    name: PropTypes.string
};

export default Subject;
