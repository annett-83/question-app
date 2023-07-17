import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import AnswerList, { AddAnswerForm } from "../common/answers";

const Answers = () => {
    const { userTeacherId } = useParams();
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        api.answers
            .fetchCommentsForUser(userTeacherId)
            .then((data) => setAnswers(data));
    }, []);
    const handleSubmit = (data) => {
        api.answers
            .add({ ...data, userTeacherId })
            .then((data) => setAnswers([...answers, data]));
    };
    const handleRemoveComment = (id) => {
        api.answers.remove(id).then((id) => {
            setAnswers(answers.filter((x) => x._id !== id));
        });
    };
    const sortedAnswers = orderBy(answers, ["created_at"], ["desc"]);
    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    <AddAnswerForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedAnswers.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Ответы</h2>
                        <hr />
                        <AnswerList
                            answers={sortedAnswers}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Answers;
