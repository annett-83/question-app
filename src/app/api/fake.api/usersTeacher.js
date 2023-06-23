const professions = {
  teacher: { _id: "67rdca3eeb7f6fgeed471818", name: "Учитель" },
  pupil: { _id: "67rdca3eeb7f6fgeed471820", name: "Учeник" },
  student: { _id: "67rdca3eeb7f6fgeed471814", name: "Студент" },
};

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

const usersTeacher = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Мария Ивановна Смирнова",
    email: "Jony7351@tw.com",
    sex: "female",
    profession: professions.teacher,
    subjects: [subjects.chemi, subjects.physic],
    numberOfQuestions: 36,
    rate: 2.5,
    bookmark: false,
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
    bookmark: false,
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
    bookmark: false,
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
    bookmark: false,
  },
];

export function fetchAll() {
  return usersTeacher
}
