import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import Subjects from "../../ui/subjects/subjects";
import { useHistory } from "react-router-dom";

const UserTeacherPage = ({ userTeacherId }) => {
    const history = useHistory();
    const [userTeacher, setUserTeacher] = useState();
    useEffect(() => {
        api.userTeachers
            .getById(userTeacherId)
            .then((data) => setUserTeacher(data));
    });
    const handleClick = () => {
        history.push("/teachers");
    };
    const handleClickChange = () => {
        history.push("/teachers/edit");
    };

    if (userTeacher) {
        return (
            <div>
                <h1>{userTeacher.name}</h1>
                <h2>Профессия: {userTeacher.profession.name} </h2>
                <Subjects subjects={userTeacher.subjects} />
                <p>
                    Количество отвеченных вопросов:{" "}
                    {userTeacher.numberOfQuestions}
                </p>
                <h2>Райтинг: {userTeacher.rate} </h2>
                <button onClick={handleClick}>К списку учителей </button>
                <button onClick={handleClickChange}>Изменить профиль </button>
            </div>
        );
    } else {
        return <h1>Loding...</h1>;
    }
};
UserTeacherPage.propTypes = {
    userTeacherId: PropTypes.string.isRequired
};
export default UserTeacherPage;
