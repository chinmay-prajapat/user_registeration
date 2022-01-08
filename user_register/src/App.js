import React, { Component } from "react";
import LoginPortal from "./LoginPortal";
import UserRegister from "./UserRegister";
import DisplayUserData from "./DisplayUserData";
import EditDetails from "./EditDetails";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={LoginPortal} />
            <Route path="/register" exact component={UserRegister} />
            <Route path="/display" exact component={DisplayUserData} />
            <Route path="/edit" exact component={EditDetails} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
