import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm";

const SignUp = () => {
    const navigate = useNavigate();
    const hendleToLogIn = () => {
        navigate("/login", { replace: true });
    };
    return (
        <div>
            <p className="card-title text-center text-bg-primary p-3">
                Зарегистрируйся здесь и получи доступ!
            </p>
            <RegisterForm />
            <p className="text-center">
                Already have account?
                <a
                    role="button"
                    className="btn btn-outline-success"
                    disabled
                    onClick={hendleToLogIn}
                >
                    Sign In
                </a>
            </p>
        </div>
    );
};
export default SignUp;
