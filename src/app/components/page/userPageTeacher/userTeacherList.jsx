import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import GroupList from "../../common/groupList";
import api from "../../../api";
import TeacherTable from "../../teacherTable";
import _ from "lodash";
import SearchStatusTeacher from "../../ui/searchStatusTeacher";

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
        if (userTeachers) {
            const newArray = userTeachers.map((userTeacher) => {
                if (userTeacher._id === id) {
                    return { ...userTeacher, bookmark: !userTeacher.bookmark };
                }
                return userTeacher;
            });
            setUserTeachers(newArray);
        }
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
        const hasTeacherSubject = (teacher, subject) => {
            return (
                teacher.subjects.filter(
                    (tsubject) => tsubject._id === subject._id
                ).length > 0
            );
        };

        const filteredTeachers = selectedSubject
            ? userTeachers.filter((userTeacher) =>
                hasTeacherSubject(userTeacher, selectedSubject)
            )
            : userTeachers;

        const count = filteredTeachers.length;
        const sortedTeachers = _.orderBy(
            filteredTeachers,
            [sortBy.path],
            [sortBy.order]
        );
        const userTeacherCrop = paginate(sortedTeachers, currentPage, pageSize);
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
                    <SearchStatusTeacher length={count} />
                    {count > 0 && (
                        <TeacherTable
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onToggleBookMark={handleToggleBookMark}
                            userTeachers={userTeacherCrop}
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
