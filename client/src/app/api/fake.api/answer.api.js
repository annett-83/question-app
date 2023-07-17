const answers = [
    {
        _id: "67rdca3eeb7f6fg",
        userTeacherId: "67rdca3eeb7f6fgeed471815",
        commentId: "67rdca3eeb7f6fgdaasd",
        content: "Lorem ipsum dolor",
        created_at: "1633576399367"
    },
    {
        _id: "67rdca3eeb7f6fgdasd",
        userTeacherId: "67rdca3eeb7f6fgeed471815",
        commentId: "67rdca3eeb7f6fg",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd",
        userTeacherId: "67rdca3eeb7f6fgeed471815",
        commentId: "67rdca3eeb7f6fgdaasd",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    }
];
if (!localStorage.getItem("answers")) {
    localStorage.setItem("answers", JSON.stringify(answers));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(answers);
        }, 200);
    });

const fetchAnswersForUser = (userTeacherId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("answers")).filter(
                    (c) => c.commentIdId === userTeacherId
                )
            );
        }, 200);
    });
const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const answers = JSON.parse(localStorage.getItem("answers"));
            const newAnswer = {
                ...data,
                created_at: Date.now(),
                _id: Math.random().toString(36).substr(2, 9)
            };
            answers.push(newAnswer);
            localStorage.setItem("comments", JSON.stringify(answers));
            resolve(newAnswer);
        }, 200);
    });

const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const answers = JSON.parse(localStorage.getItem("answers"));
            const newAnswer = answers.filter((x) => x._id !== id);
            console.log(id);
            console.log(newAnswer);
            localStorage.setItem("answers", JSON.stringify(newAnswer));
            resolve(id);
        }, 200);
    });
export default {
    fetchAll,
    fetchAnswersForUser,
    add,
    remove
};
