import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PersistentDrawerLeft from "./SideNavigation/SideNav";
import Video from "./VideoComponent/Videobackground";
import Tips from "./Tips/newTip";
import MainContent from "./VideoComponent/mainContent";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div clasName="container-fluid">
          <PersistentDrawerLeft />
         
          <Switch>
            <div className="routes">
              <Route exact={true} path="/video" component={MainContent} />
              <Route path="/tips" exact component={Tips} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
