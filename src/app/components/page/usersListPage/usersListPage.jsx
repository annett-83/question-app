import React, { useState } from "react";
import api from "../../../api";
const UsersListPage = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  return (
    <div>
      <span
        className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}
      >
        {users.length>0?`${users.length} пользователя сейчас онлайн`:"пользователей нет"}
        
      </span>
      {users.length>0 &&
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Статус</th>
            <th scope="col">Предмет</th>
            <th scope="col">Кол-во вопросов</th>
            <th scope="col">Райтинг</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.profession.name}</td>
              <td>
                {user.subjects.map((item) => (
                  <span className={"badge m-1 bg-" + item.color} key={item._id}>
                    {item.name}
                  </span>
                ))}
              </td>

              <td>{user.numberOfQuestions}</td>
              <td>{user.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
    
  );
};
export default UsersListPage;
