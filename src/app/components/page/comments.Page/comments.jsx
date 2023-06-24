import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Comment from "./comment";
import Pagination from "../../common/table/pagination";
import { paginate } from "../../../utils/paginate";
import GroupList from "../../common/table/groupList";
import api from "../../../api";
import SearchStatus from "../../ui/searchStatus";
const Comments = ({ comments: allComments, ...rest }) => {
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [subjects, setSubject] = useState();
    const [selectedSubject, setSelectedSubject] = useState();

    useEffect(() => {
        api.subjects.fetchAll().then((data) => setSubject(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedSubject]);
    const handleSubjectSelect = (item) => {
        setSelectedSubject(item);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    // functioniert nicht?????
    const filteredComments = selectedSubject
        ? allComments.filter((comment) => comment.subjects === selectedSubject)
        : allComments;
    console.log(selectedSubject);
    const count = filteredComments.length;
    const commentCrop = paginate(filteredComments, currentPage, pageSize);
    //
    const clearFilter = () => {
        setSelectedSubject();
    };

    return (
        <div className="d-flex">
            {subjects && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Предмет</th>
                                <th scope="col">Раздел</th>
                                <th scope="col">Вопрос</th>
                                <th scope="col">Цена</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Посмотреть вопрос полность</th>
                                <th scope="col">Ответить на вопрос</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commentCrop.map((comment) => (
                                <Comment
                                    key={comment._id}
                                    {...rest}
                                    {...comment}
                                />
                            ))}
                        </tbody>
                    </table>
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
            </div>
        </div>
    );
};
Comments.propTypes = {
    comments: PropTypes.array
};
export default Comments;
