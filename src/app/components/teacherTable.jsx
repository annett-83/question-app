import React from "react";
import PropTypes from "prop-types";
import Subject from "./ui/subjects/subject";
import Table from "./common/table/table";
import BookMark from "./bookmark";

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
        name: { path: "name", name: "Имя" },
        subject: {
            name: "Предмет",
            component: (comment) => <Subject subject={comment.subject} />
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
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
