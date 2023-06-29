import React from "react";
import { useParams } from "react-router-dom";
import CommentPage from "../components/page/comments.Page/commentPage";
import CommentsList from "../components/page/comments.Page/commentsList";

const Comments = () => {
    const params = useParams();
    const { commentId } = params;
    return <>{commentId ? <CommentPage commentId={commentId} /> : <CommentsList />} </>;
};

export default Comments;
