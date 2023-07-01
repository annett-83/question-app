import React from "react";
import { useHistory } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm";

const SignUp = () => {
    const histoty = useHistory();
    const hendleToLogIn = () => {
        histoty.push("/signUp");
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
