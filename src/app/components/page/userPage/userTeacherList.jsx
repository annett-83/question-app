import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import GroupList from "../../common/groupList";
import api from "../../../api";
import SearchStatus from "../../ui/searchStatus";
import TeacherTable from "../../teacherTable";
import _ from "lodash";

const UserTeacherList = () => {
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [subjects, setSubjects] = useState();
    const [selectedSubject, setSelectedSubject] = useState();
    const [sortBy, setSortBy] = useState({ path: "price", order: "desc" });
    const [userTeachers, setUserTeachers] = useState();

    useEffect(() => {
        api.userTeachers.fetchAll().then((data) => setUserTeachers(data));
    }, []);
    console.log(userTeachers);

    const handleToggleBookMark = (id) => {
        const newArray = userTeachers.map((userTeacher) => {
            if (userTeacher._id === id) {
                return { ...userTeacher, bookmark: !userTeacher.bookmark };
            }
            return userTeacher;
        });
        setUserTeachers(newArray);
    };

    useEffect(() => {
        api.subjects.fetchAll().then((data) => setSubjects(data));
    }, []);
    console.log(subjects);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedSubject]);
    const handleSubjectSelect = (item) => {
        setSelectedSubject(item);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    if (userTeachers) {
        const filteredTeachers = selectedSubject
            ? userTeachers.filter(
                (userTeacher) =>
                    JSON.stringify(userTeacher.subject) ===
                    JSON.stringify(selectedSubject)
            )
            : userTeachers;

        const count = filteredTeachers.length;
        const sortedTeachers = _.orderBy(
            filteredTeachers,
            [sortBy.path],
            [sortBy.order]
        );
        const commentCrop = paginate(sortedTeachers, currentPage, pageSize);
        //
        const clearFilter = () => {
            setSelectedSubject();
        };

        return (
            <div className="d-flex">
                {subjects && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <p className="text-justify fw-bold text-warning border-bottom">
                            Выберите предмет
                        </p>
                        <GroupList
                            items={subjects}
                            onItemSelect={handleSubjectSelect}
                            selectedItem={selectedSubject}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Отчистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    {count > 0 && (
                        <TeacherTable
                            comments={commentCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                    >
                        Задай свой вопрос
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                        Учителя онлайн
                    </button>
                </div>
            </div>
        );
    }
    return "Loading...";
};
UserTeacherList.propTypes = {
    comments: PropTypes.array
};
export default UserTeacherList;
