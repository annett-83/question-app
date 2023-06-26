import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../../common/table/pagination";
import { paginate } from "../../../utils/paginate";
import GroupList from "../../common/table/groupList";
import api from "../../../api";
import SearchStatus from "../../ui/searchStatus";
import CommentsTable from "../../commentsTable";
import _ from "lodash";

const Comments = () => {
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [subjects, setSubjects] = useState();
    const [selectedSubject, setSelectedSubject] = useState();
    const [users, setUsers] = useState();
    const [sortBy, setSortBy] = useState({ path: "price", order: "desc" });

    const [comments, setComments] = useState();
    useEffect(() => {
        api.comments.fetchAll().then((data) => setComments(data));
    }, []);
    // console.log(comments);
    const handleDelete = (commentId) => {
        setComments(comments.filter((comment) => comment._id !== commentId));
    };

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    if (users) {
        comments.forEach((c) => {
            const fu = users.find((u) => u._id === c.userId);
            if (fu) {
                c.userName = fu.name;
            }
        });
    }

    useEffect(() => {
        api.subjects.fetchAll().then((data) => setSubjects(data));
    }, []);
    // console.log(subjects);
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
    if (comments) {
        const filteredComments = selectedSubject
            ? comments.filter(
                (comment) =>
                    JSON.stringify(comment.subject) ===
                    JSON.stringify(selectedSubject)
            )
            : comments;

        const count = filteredComments.length;
        const sortedComments = _.orderBy(
            filteredComments,
            [sortBy.path],
            [sortBy.order]
        );
        const commentCrop = paginate(sortedComments, currentPage, pageSize);
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
                        <CommentsTable
                            comments={commentCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
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
Comments.propTypes = {
    comments: PropTypes.array
};
export default Comments;
