import React from "react";
import Subjects from "./subjects/subjects";
import PropTypes from "prop-types";

const SubjectsCard = ({ data }) => {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>Предмет</span>
                </h5>
                <p className="card-text">
                    <Subjects subjects={data} />
                </p>
            </div>
        </div>
    );
};
SubjectsCard.propTypes = {
    data: PropTypes.array
};

export default SubjectsCard;
