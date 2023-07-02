const professions = {
    teacher: { _id: "67rdca3eeb7f6fgeed471818", name: "Учитель" },
    pupil: { _id: "67rdca3eeb7f6fgeed471820", name: "Учeник" },
    student: { _id: "67rdca3eeb7f6fgeed471814", name: "Студент" }
};

const subjects = {
    chemi: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "химия",
        color: "primary"
    },
    physic: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "физика",
        color: "warning"
    },
    german: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "немецкий язык",
        color: "danger"
    },
    biolog: {
        _id: "67rdca3eeb7f6fgeed4716015",
        name: "биология",
        color: "success"
    }
};

export const userTeachers = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Мария Ивановна Смирнова",
        email: "Jony7351@tw.com",
        sex: "female",
        profession: professions.teacher,
        subjects: [subjects.chemi, subjects.physic],
        numberOfQuestions: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Рэйчел Грин",
        email: "green7311@fam.biz",
        sex: "female",
        profession: professions.teacher,
        subjects: [subjects.chemi, subjects.biolog],
        numberOfQuestions: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Иван Иванович Иванов",
        email: "ivanov456@fam.ru",
        sex: "male",
        profession: professions.teacher,
        subjects: [subjects.physic, subjects.biolog],
        numberOfQuestions: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Петр Петрович Береговой",
        email: "petrcool7@fam.du",
        sex: "other",
        profession: professions.teacher,
        subjects: [subjects.physic, subjects.german],
        numberOfQuestions: 148,
        rate: 3.5,
        bookmark: false
    }
];
if (!localStorage.getItem("userTeachers")) {
    localStorage.setItem("userTeachers", JSON.stringify(userTeachers));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("userTeachers")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const userTeachers = JSON.parse(localStorage.getItem("userTeachers"));
        const userTeacherIndex = userTeachers.findIndex((u) => u._id === id);
        userTeachers[userTeacherIndex] = {
            ...userTeachers[userTeacherIndex],
            ...data
        };
        localStorage.setItem("userTeachers", JSON.stringify(userTeachers));
        resolve(userTeachers[userTeacherIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("userTeachers")).find(
                    (userTeacher) => userTeacher._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};

/* const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(userTeachers);
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                userTeachers.find((userTeacher) => userTeacher._id === id)
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById
}; */
