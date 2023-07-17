import React from "react";
import { useParams } from "react-router-dom";
import UserTeacherPage, {
    UserTeacherList
} from "../components/page/userPageTeacher";
import EditUserTeacherPage from "../components/page/editUserTeacherPage";

const Teachers = () => {
    const params = useParams();
    const { userTeacherId, edit } = params;
    return (
        <>
            {userTeacherId ? (
                edit ? (
                    <EditUserTeacherPage />
                ) : (
                    <UserTeacherPage userTeacherId={userTeacherId} />
                )
            ) : (
                <UserTeacherList />
            )}
        </>
    );
};

export default Teachers;
