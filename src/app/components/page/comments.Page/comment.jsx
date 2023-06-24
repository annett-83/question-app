import React from "react";
import PropTypes from "prop-types";
import Subject from "../../ui/subjects/subject";

const Comment = ({
    _id,
    subjects,
    price,
    section,
    content,
    userId,
    onDelete
}) => {
    return (
        <tr>
            <td>
                {subjects.map((item) => (
                    <Subject key={item._id} {...item} />
                ))}
            </td>
            <td>{section}</td>
            <td>{content}</td>
            <td>{price}</td>
            <td>{userId}</td>
            <td>
                <button type="button" className="btn btn-warning">
                    Посмотреть
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => onDelete(_id)}
                >
                    Ответить
                </button>
            </td>
        </tr>
    );
};
Comment.propTypes = {
    _id: PropTypes.string.isRequired,
    subjects: PropTypes.array,
    section: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Comment;
