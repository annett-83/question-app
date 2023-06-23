export const subjects = {
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
  }
};
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(subjects);
        }, 2000);
    });

export default {
    fetchAll
};
