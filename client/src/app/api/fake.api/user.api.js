import { professions } from "./professions.api";
export const users = [
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Ольга Дмитриевна Пауцук",
        email: "Jontik7351@tw.com",
        sex: "female",
        profession: professions.pupil,
        numberOfQuestions: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Костылев Петя",
        email: "white4571@twipet.com",
        sex: "male",
        profession: professions.pupil,
        numberOfQuestions: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        email: "bob007@tw.com",
        sex: "male",
        profession: professions.student,
        numberOfQuestions: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471825",
        name: "Вуппи Голберг",
        email: "golberg71@fam.vz",
        sex: "female",
        profession: professions.pupil,
        numberOfQuestions: 158,
        rate: 3,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        email: "mindgames6878@phis.tech",
        sex: "male",
        profession: professions.pupil,
        numberOfQuestions: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        email: "mindes000@phis.tech",
        sex: "male",
        profession: professions.student,
        numberOfQuestions: 147,
        rate: 3.5,
        bookmark: false
    }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users);
        }, 2000);
    });
export default {
    fetchAll
};
