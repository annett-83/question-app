import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/logIn"
                        >
                            Войти
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/signUp"
                        >
                            Регистрация
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                        >
                            Главная
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/comment"
                        >
                            Comment
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/editUserTeacherPage"
                        >
                            edit
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="card-footer text-muted">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/support">
                            Служба поддержки
                        </Link>
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

export default NavBar;
