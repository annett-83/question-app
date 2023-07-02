import React from "react";
import PropTypes from "prop-types";
import Subjects from "./ui/subjects/subjects";
import Table from "./common/table/table";
import BookMark from "./bookmark";
import { Link } from "react-router-dom";

const TeacherTable = ({
    userTeachers,
    onSort,
    selectedSort,
    _id,
    subject,
    onToggleBookMark,
    ...rest
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (userTeacher) => (
                <Link to={`/teachers/${userTeacher._id}`}>
                    {userTeacher.name}
                </Link>
            )
        },
        subject: {
            name: "Предмет",
            component: (userTeacher) => (
                <Subjects subjects={userTeacher.subjects} />
            )
        },
        rate: { path: "rate", name: "Оценка" },
        numberOfQuestions: {
            path: "numberOfQuestions",
            name: "Колиство отвеченных вопросов"
        },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (userTeacher) => (
                <BookMark
                    status={userTeacher.bookmark}
                    onClick={() => onToggleBookMark(userTeacher._id)}
                />
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={userTeachers}
        />
    );
};
TeacherTable.propTypes = {
    _id: PropTypes.string,
    subject: PropTypes.object,
    userTeachers: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default TeacherTable;
