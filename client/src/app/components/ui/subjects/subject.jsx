import React from "react";
import PropTypes from "prop-types";
const Subject = ({ subject }) => {
    // console.log("Subject komponente", subject.name);
    return (
        <span className={"badge m-1 bg-" + subject.color}>{subject.name}</span>
    );
};
Subject.propTypes = {
    subject: PropTypes.object
};

export default Subject;
