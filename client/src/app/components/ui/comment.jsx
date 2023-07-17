import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import CommentPage, {
    CommentsList,
    AddCommentForm
} from "../page/comments.Page/index";

const Comment = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);
    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, userId })
            .then((data) => setComments([...comments, data]));
    };
    const handleRemoveComment = (id) => {
        api.comments.remove(id).then((id) => {
            setComments(comments.filter((x) => x._id !== id));
        });
    };
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <CommentPage />
                        <hr />
                        <CommentsList
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Comment;
