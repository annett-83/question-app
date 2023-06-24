import React, { useState } from "react";
import Comments from "./components/page/comments.Page/comments";
import api from "./api";
function App() {
    const [comments, setComments] = useState(api.comments.fetchAll());
    /* useEffect(() => {
        api.comments.fetchAll().then((data) => setComments(data));
    }, []); */
    console.log(comments);
    const handleDelete = (commentId) => {
        setComments(comments.filter((comment) => comment._id !== commentId));
    };
    return (
        <div>
            <Comments onDelete={handleDelete} comments={comments} />
            {/* {comments && (
                <Comments onDelete={handleDelete} comments={comments} />
            )} */}
        </div>
    );
}

export default App;
