import React from "react";
import Comments from "./layouts/comments";
import Login from "./layouts/login";
import Main from "./layouts/main";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./layouts/navBar";
import SignUp from "./layouts/signUp";
import Contacts from "./layouts/contacts";
import Support from "./layouts/support";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/comments/:commentId" component={Comments} />
                <Route path="/login" component={Login} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/support" component={Support} />
                <Route path="/comments" component={Comments} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
