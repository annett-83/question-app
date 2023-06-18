import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import Main from "./layouts/main";
import Support from "./layouts/support";
import Login from "./layouts/login";
import Logup from "./layouts/logup";
import Contacts from "./layouts/contacts";
// import UsersListPage from "./components/page/usersListPage/usersListPage";
import CommentsPage from "./components/page/comments.Page/commentsPage";

function App() {
  return (
    <div>
      
      <CommentsPage/>
      {/*<Main /> */}
      <Switch>
        <Route path="/contacts" component={Contacts} />
        <Route path="/support" component={Support} />
        <Route path="/login" component={Login} />
        <Route path="/logup" component={Logup} />
        
        <Redirect to="/" />
      </Switch> 
    </div>
  );
}

export default App;
