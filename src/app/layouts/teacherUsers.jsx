import React from "react";
import { useParams } from "react-router-dom";
import UserTeacherList from "../components/page/userPage/userTeacherList";
import UserPageTeacher from "../components/page/userPage/userPageTeacher";

const Comments = () => {
    const params = useParams();
    const { userPageTeacherId } = params;
    return (
        <>
            {userPageTeacherId ? (
                <UserPageTeacher userPageTeacherId={userPageTeacherId} />
            ) : (
                <UserTeacherList />
            )}{" "}
        </>
    );
};

export default Comments;
