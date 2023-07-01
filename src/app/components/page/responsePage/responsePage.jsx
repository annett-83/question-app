import React, { useState, useEffect } from "react";
import TextInputField from "../../common/form/textInputField";
import { validator } from "../../../utils/validator";
import TextAreaField from "../../common/form/textAreaField";

const ResponsePage = () => {
    const [data, setData] = useState({ email: "" });
    const [errors, setErrors] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <div>
            <p className="card-title text-center text-bg-warning p-3">
                Введите Ваш ответ
            </p>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextInputField
                                label="Введите свое имя"
                                type="input"
                                name=""
                                value={data.exampleFormControlTextarea1}
                                onChange={handleChange}
                            />
                            <TextAreaField
                                label="Введите свой ответ"
                                name=""
                                type="input"
                                value={data.exampleFormControlTextarea1}
                                onChange={handleChange}
                            />
                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="submit"
                                disabled={!isValid}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsePage;
