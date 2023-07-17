import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import TextField from "../../common/form/textField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";

const EditUserTeacherPage = () => {
    const { userTeacherId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        sex: "male",
        subjects: []
    });
    const [subjects, setSubjects] = useState([]);
    const [errors, setErrors] = useState({});
    const getSubjects = (elements) => {
        const subjectsArray = [];
        for (const elem of elements) {
            for (const subject in subjects) {
                if (elem.value === subjects[subject].value) {
                    subjectsArray.push({
                        _id: subjects[subject].value,
                        name: subjects[subject].label,
                        color: subjects[subject].color
                    });
                }
            }
        }
        return subjectsArray;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { subjects } = data;
        api.users
            .update(userTeacherId, {
                ...data,
                subjects: getSubjects(subjects)
            })
            .then((data) => navigate(`/trachers/${data._id}`));
        console.log({
            ...data,
            subjects: getSubjects(subjects)
        });
    };
    const transformData = (data) => {
        return data.map((subj) => ({ label: subj.name, value: subj._id }));
    };
    useEffect(() => {
        setIsLoading(true);
        api.userTeachers.getById(userTeacherId).then(({ subjects, ...data }) =>
            setData((prevState) => ({
                ...prevState,
                ...data,
                subjects: transformData(subjects)
            }))
        );
        api.subjects.fetchAll().then((data) => {
            const subjectsList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setSubjects(subjectsList);
        });
    }, []);
    useEffect(() => {
        if (data._id) setIsLoading(false);
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                defaultValue={data.subjects}
                                options={subjects}
                                onChange={handleChange}
                                name="subjects"
                                label="Выберите ваш предмет"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserTeacherPage;
