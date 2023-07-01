import React from "react";
import Comments from "./layouts/comments";
import Login from "./layouts/login";
import Main from "./layouts/main";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import SignUp from "./layouts/signUp";
import Contacts from "./layouts/contacts";
import Support from "./layouts/support";
import ResponsePage from "./components/page/responsePage/responsePage";
import UserPagePupil from "./components/page/userPage/userPagePupil";
import UserTeacherList from "./components/page/userPage/userTeacherList";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route
                    path="/userTeacherList"
                    component={UserTeacherList}
                />
                <Route path="/comments/:commentId" component={Comments} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/support" component={Support} />
                <Route path="/comments" component={Comments} />
                <Route path="/responsePage" component={ResponsePage} />
                <Route path="/userPage" component={UserPagePupil} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
