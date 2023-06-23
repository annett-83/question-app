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

const comments = [
    {
        _id: "67rdca3eeb7f6fg",
        userId: "67rdca3eeb7f6fgeed471821",
        // pageId: "67rdca3eeb7f6fgeed471815",
        subjects: [subjects.chemi, subjects.physic],
        price: "150 руб",
        section: "organic chemie",
        content: "Lorem ipsum dolor",
        created_at: "1633576399367"
    },
    {
        _id: "67rdca3eeb7f6fgdasd",
        pageId: "67rdca3eeb7f6fgeed471815",
        subjects: [subjects.chemi, subjects.physic],
        price: "150 руб",
        section: "organic chemie",
        userId: "67rdca3eeb7f6fgeed471816",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd",
        pageId: "67rdca3eeb7f6fgeed471817",
        subjects: [subjects.chemi, subjects.physic],
        price: "150 руб",
        section: "organic chemie",
        userId: "67rdca3eeb7f6fgeed471817",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd2",
        pageId: "67rdca3eeb7f6fgeed471817",
        subjects: [subjects.chemi, subjects.physic],
        price: "150 руб",
        section: "organic chemie",
        userId: "67rdca3eeb7f6fgeed471817",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd3",
        pageId: "67rdca3eeb7f6fgeed471817",
        subjects: [subjects.chemi],
        price: "150 руб",
        section: "organic chemie",
        userId: "67rdca3eeb7f6fgeed471817",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    }
];
export function fetchAll() {
    return comments;
}

/* const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(comments);
    }, 2000);
  });

export default {
  fetchAll,
}; */
