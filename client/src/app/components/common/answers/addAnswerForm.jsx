import React, { useEffect, useState } from "react";
import api from "../../../api";
import SelectField from "../form/selectField";
import TextAreaField from "../form/textAreaField";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";
const initialData = { userTeacherId: "", content: "" };

const AddAnswerForm = ({ onSubmit }) => {
    const [data, setData] = useState(initialData);
    const [userTeachers, setUserTeachers] = useState({});
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        userTeacherId: {
            isRequired: {
                message: "Введит"
            }
        },
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        api.userTeachers.fetchAll().then(setUserTeachers);
    }, []);
    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        clearForm();
    };
    const arrayOfUsers =
        userTeachers &&
        Object.keys(userTeachers).map((userTeacherId) => ({
            label: userTeachers[userTeacherId].name,
            value: userTeachers[userTeacherId]._id
        }));
    return (
        <div>
            <h2>New comment</h2>
            <form onSubmit={handleSubmit}>
                <SelectField
                    onChange={handleChange}
                    options={arrayOfUsers}
                    name="userTeacherId"
                    value={data.userTeacherId}
                    defaultOption="Выберите пользователя"
                    error={errors.userTeacherId}
                />
                <TextAreaField
                    value={data.content}
                    onChange={handleChange}
                    name="content"
                    label="Сообщение"
                    error={errors.content}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Отправить</button>
                </div>
            </form>
        </div>
    );
};
AddAnswerForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddAnswerForm;
