import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const histoty = useHistory();
    const hendleToRegister = () => {
        histoty.push("/signUp");
    };

    return (
        <div>
            <p className="card-title text-center text-bg-success p-3">
                Войди в систему и задай вопрос!
            </p>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <LoginForm />
                        <p>
                            Dont have account?
                            <a
                                role="button"
                                className="btn btn-outline-primary"
                                disabled
                                onClick={hendleToRegister}
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
