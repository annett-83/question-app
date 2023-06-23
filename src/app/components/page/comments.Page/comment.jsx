import React from "react";
import PropTypes from "prop-types";

const Comment = ({ _id, subjects, price, section, content, userId }) => {
 

  return (
    <tr key={_id}>
      <td>
        {subjects.map((item) => (
          <span className={"badge m-1 bg-" + item.color} key={item._id}>
            {item.name}
          </span>
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
        <button type="button" className="btn btn-success">
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
};

export default Comment;
