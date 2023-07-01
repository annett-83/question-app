import React from "react";
import PropTypes from "prop-types";
import Subject from "./ui/subjects/subject";
import Table from "./common/table/table";

const CommentsTable = ({
    comments,
    onSort,
    selectedSort,
    _id,
    subject,
    onDelete,
    onClick,
    ...rest
}) => {
    const columns = {
        subject: {
            name: "Предмет",
            component: (comment) => <Subject subject={comment.subject} />
        },
        section: { path: "section", name: "Раздел" },
        content: { path: "content", name: "Вопрос" },
        price: { path: "price", name: "Цена, в руб." },
        userName: { path: "userName", name: "Имя" },
        button: {
            name: "Посмотреть",
            component: (comment) => (
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => onClick(comment._id)}
                >
                    Посмотреть
                </button>
            )
        },
        delete: {
            name: "Ответить",
            component: (comment) => (
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => onDelete(comment._id)}
                >
                    Ответить
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={comments}
        />
    );
};
CommentsTable.propTypes = {
    _id: PropTypes.string,
    subject: PropTypes.object,
    comments: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CommentsTable;
