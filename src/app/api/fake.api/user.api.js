 import { professions } from "./professions.api";
const subjects = {
  chemi: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "химия",
    color: "primary",
  },
  physic: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "физика",
    color: "warning",
  },
  german: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "немецкий язык",
    color: "danger",
  },
  biolog: {
    _id: "67rdca3eeb7f6fgeed4716015",
    name: "биология",
    color: "success",
  },
};
const users = [
  {
    _id: "67rdca3eeb7f6fgeed471821",
    name: "Ольга Дмитриевна Пауцук",
    email: "Jontik7351@tw.com",
    sex: "female",
    profession: professions.pupil,
    subjects: [subjects.german, subjects.physic],
    numberOfQuestions: 36,
    rate: 2.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Костылев Петя",
    email: "white4571@twipet.com",
    sex: "male",
    profession: professions.pupil,
    subjects: [subjects.physic],
    numberOfQuestions: 36,
    rate: 2.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Боб Келсо",
    email: "bob007@tw.com",
    sex: "male",
    profession: professions.student,
    subjects: [subjects.german],
    numberOfQuestions: 247,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471825",
    name: "Вуппи Голберг",
    email: "golberg71@fam.vz",
    sex: "female",
    profession: professions.pupil,
    subjects: [subjects.biolog],
    numberOfQuestions: 158,
    rate: 3,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    name: "Шелдон Купер",
    email: "mindgames6878@phis.tech",
    sex: "male",
    profession: professions.pupil,
    subjects: [subjects.biolog],
    numberOfQuestions: 37,
    rate: 4.6,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471820",
    name: "Леонард Хофстедтер",
    email: "mindes000@phis.tech",
    sex: "male",
    profession: professions.student,
    subjects: [subjects.physic],
    numberOfQuestions: 147,
    rate: 3.5,
    bookmark: false,
  },
];
export function fetchAll() {
    return users
};
