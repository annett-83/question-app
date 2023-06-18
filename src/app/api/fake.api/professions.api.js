export const professionsObject = {
    teacher: { _id: "67rdca3eeb7f6fgeed471818", name: "Учитель" },
    pupil: { _id: "67rdca3eeb7f6fgeed471820", name: "Учeник" },
    student: { _id: "67rdca3eeb7f6fgeed471814", name: "Студент" }
};
export const professions = [
  { _id: "67rdca3eeb7f6fgeed471818", name: "Учитель" },
  { _id: "67rdca3eeb7f6fgeed471820", name: "Учeник" },
  { _id: "67rdca3eeb7f6fgeed471814", name: "Студент" }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(professionsObject);
        }, 2000);
    });

export default {
    fetchAll
};
