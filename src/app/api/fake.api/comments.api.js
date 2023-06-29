import { subjects } from "./subjects.api";

export const comments = [
    {
        _id: "67rdca3eeb7f6fg",
        userId: "67rdca3eeb7f6fgeed471821",
        // pageId: "67rdca3eeb7f6fgeed471815",
        subject: subjects.chemi,
        price: 150,
        section: "organic chemie",
        content: "Lorem ipsum dolor",
        created_at: "1633576399367"
    },
    {
        _id: "67rdca3eeb7f6fgdasd",
        pageId: "67rdca3eeb7f6fgeed471815",
        subject: subjects.physic,
        price: 250,
        section: "organic chemie",
        userId: "67rdca3eeb7f6fgeed471816",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd",
        pageId: "67rdca3eeb7f6fgeed471817",
        subject: subjects.biolog,
        price: 3000,
        section: "organic chemie",
        userId: "67rdca3eeb7f6fgeed471823",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd2",
        pageId: "67rdca3eeb7f6fgeed471856",
        subject: subjects.biolog,
        price: 50,
        section: "Ботаника",
        userId: "67rdca3eeb7f6fgeed471824",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd3",
        pageId: "67rdca3eeb7f6fgeed471857",
        subject: subjects.german,
        price: 2500,
        section: "Substantiv-Глагол",
        userId: "67rdca3eeb7f6fgeed471825",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(comments);
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(comments.find((comment) => comment._id === id));
        }, 1000);
    });

export default {
    fetchAll,
    getById
};
