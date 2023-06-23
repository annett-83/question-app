import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="/login">
              Войти
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logup">
              Регистрация
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h3 className="card-title">
          Учись легче, учась быстрее, учись свободнее...
        </h3>
        <Link to="/CommentsPage" className="btn btn-warning">
          GO!
        </Link>
      </div>

      <div className="card-footer text-muted">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/support">
              Служба поддержки
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Наши контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
