import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UserTeacherCard = ({ userTeacher }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(location.pathname + "/teachers/edit", { replace: true });
    };
    return (
        <div className="card mb-3">
            <div className="card-body">
                <button
                    className="position-absolute top-0 end-0 btn btn-light btn-sm"
                    onClick={handleClick}
                >
                    <i className="bi bi-gear"></i>
                </button>
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={`https://avatars.dicebear.com/api/avataaars/${(
                            Math.random() + 1
                        )
                            .toString(36)
                            .substring(7)}.svg`}
                        className="rounded-circle shadow-1-strong me-3"
                        alt="avatar"
                        width="65"
                        height="65"
                    />
                    <div className="mt-3">
                        <h4>{userTeacher.name}</h4>
                        <p className="text-secondary mb-1">
                            {userTeacher.profession.name}
                        </p>
                        <div className="text-muted">
                            <i
                                className="bi bi-caret-down-fill text-primary"
                                role="button"
                            ></i>
                            <i
                                className="bi bi-caret-up text-secondary"
                                role="button"
                            ></i>
                            <span className="ms-2">{userTeacher.rate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserTeacherCard.propTypes = {
    userTeacher: PropTypes.object
};

export default UserTeacherCard;
