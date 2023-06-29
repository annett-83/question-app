import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Subject from "../../ui/subjects/subject";

const CommentPage = ({ commentId }) => {
    const [comment, setComment] = useState();
    useEffect(() => {
        api.comments.getById(commentId).then((data) => setComment(data));
    });
    if (comment) {
        return (
            <div>
                <h1 className="text-center">
                    <Subject subject={comment.subject} />
                </h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item ">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Раздел
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>{comment.section}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Содержание вопроса
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>{comment.content}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Цена вопроса
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>{comment.price}</strong>
                            </div>
                        </div>
                    </div>
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
