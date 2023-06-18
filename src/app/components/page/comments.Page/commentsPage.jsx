import React, { useState } from "react";
import api from "../../../api";
import AddCommentForm from "./addCommentForm";
const CommentsPage = () => {
  const [comments, setComments] = useState(api.comments.fetchAll());
  return (
    <div>
      <span
        className={"badge bg-" + (comments.length > 0 ? "primary" : "danger")}
      >
        {comments.length > 0
          ? `${comments.length} уже заданно вопросов`
          : "вопросов сегдня нет"}
      </span>
      {comments.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Предмет</th>
              <th scope="col">Раздел</th>
              <th scope="col">Вопрос</th>
              <th scope="col">Цена</th>
              <th scope="col">Имя</th>
              <th scope="col">кнопка ответить</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comments) => (
              <tr key={comments._id}>
                <td>
                  {comments.subjects.map((item) => (
                    <span
                      className={"badge m-1 bg-" + item.color}
                      key={item._id}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{comments.section}</td>
                <td>{comments.content}</td>
                <td>{comments.price}</td>
                <td>{comments.userId}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Задай свой вопрос
      </button>
    </div>
  );
};
export default CommentsPage;
