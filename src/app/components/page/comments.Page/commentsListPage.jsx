import React, { useState, useEffect } from "react";
import api from "../../../api";
import SearchStatus from "../../ui/searchStatus";
import Pagination from "../../common/table/pagination";
import { paginate } from "../../../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "../../common/table/groupList";

const CommentsListPage = () => {
  const comments = api.comments.fetchAll();
  // pagination
  const count = comments.length;
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [subjects, setSubject] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const handlePageChange = (pageIndex) => {
    // console.log(pageIndex);
    setCurrentPage(pageIndex);
  };
  const filteredComments = selectedSubject
    ? comments.filter((comment) => comment.subjects === selectedSubject)
    : comments;
  const commentCrop = paginate(filteredComments, currentPage, pageSize);
  console.log(filteredComments);
  useEffect(() => {
    api.subjects.fetchAll().then((data) => setSubject(data));
  }, []);

  const handleSubjectSelect = (item) => {
    setSelectedSubject(item);
  };
  return (
    <>
      <SearchStatus />
      {subjects && (
        <GroupList
          selectedItem={selectedSubject}
          items={subjects}
          onItemSelect={handleSubjectSelect}
        />
      )}

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
            {commentCrop.map((comments) => (
              <tr key={comments._id}>
                <td>
                  {comments.subjects.map((item) => (
                    <span
                      className={"badge m-1 bg-" + item.color}
                      key={item._id}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{comments.section}</td>
                <td>{comments.content}</td>
                <td>{comments.price}</td>
                <td>{comments.userId}</td>
                <td>
                  <button type="button" className="btn btn-warning">
                    Посмотреть
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-success">
                    Ответить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Задай свой вопрос
      </button>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
CommentsListPage.propTypes = {
  comments: PropTypes.array,
};
export default CommentsListPage;
