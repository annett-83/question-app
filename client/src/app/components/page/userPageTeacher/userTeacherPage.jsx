import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import UserTeacherCard from "../../ui/userTeacherCard";
import SubjectsCard from "../../ui/subjectsCard";
import NumberOfQuestionsCard from "../../ui/numberOfQuestionsCard";
const UserTeacherPage = ({ userTeacherId }) => {
    const [userTeacher, setUserTeacher] = useState();
    useEffect(() => {
        api.userTeachers
            .getById(userTeacherId)
            .then((data) => setUserTeacher(data));
    });

    if (userTeacher) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-mb-4 mb-3">
                        <UserTeacherCard userTeacher={userTeacher} />
                        <SubjectsCard data={userTeacher.subjects} />
                        <NumberOfQuestionsCard
                            value={userTeacher.numberOfQuestions}
                        />
                    </div>
                </div>
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
