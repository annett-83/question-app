import React from "react";
import Comments from "./layouts/comments";
import Login from "./layouts/login";
import Main from "./layouts/main";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import SignUp from "./layouts/signUp";
import Contacts from "./layouts/contacts";
import Support from "./layouts/support";
import Teachers from "./layouts/teachers";
import EditUserTeacherPage from "./components/page/editUserTeacherPage";
import Answer from "./components/common/answers/answer";
import Comment from "./components/ui/comment";

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/comments/:commentId" element={<Comments />} />
                <Route
                    path="/editUserTeacherPage"
                    component={EditUserTeacherPage}
                />
                <Route path="/login/:type?" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/support" element={<Support />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/answer" element={<Answer />} />
                <Route path="/comment" element={<Comment />} />
                <Route
                    path="/teachers/:userTeacherId?/:edit?"
                    element={<Teachers />}
                />
                <Route index element={<Main />} />
                <Route path ="*" element={<Navigate to= "/" />} />
                {/* <Redirect to="/" /> */}
            </Routes>
        </div>
    );
}

export default App;
