import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Subject from "../../ui/subjects/subject";
import { useNavigate } from "react-router-dom";

const CommentPage = ({ commentId }) => {
    // console.log("Commentpage aufgerufen mit id ", commentId);
    const navigate = useNavigate();
    const [comment, setComment] = useState();
    useEffect(() => {
        api.comments.getById(commentId).then((data) => setComment(data));
    }, []);

    const handleClickBack = () => {
        navigate("/comments", { replace: true });
    };
    const handleClickResponce = () => {
        navigate("/answer", { replace: true });
    };
    if (comment) {
        return (
            <div>
                <h1 className="text-center">
                    <Subject subject={comment.subject} />
                </h1>
                <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-uppercase"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                Раздел
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <strong>{comment.section}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-uppercase"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                Содержание вопроса
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <strong>{comment.content}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-uppercase"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                Цена вопроса
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <strong>{comment.price}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="btn-group btn-group-lg"
                    role="group"
                    aria-label="Группа больших кнопок"
                >
                    <button
                        type="button"
                        className="btn btn-outline-dark  btn-warning"
                        onClick={handleClickBack}
                    >
                        Назад
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-success" onClick={handleClickResponce}
                    >
                        Ответить
                    </button>
                </div>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

CommentPage.propTypes = {
    commentId: PropTypes.string.isRequired
};

export default CommentPage;
