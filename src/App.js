import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PersistentDrawerLeft from "./SideNavigation/SideNav";
import Video from "./VideoComponent/Videobackground";
import Tips from "./Topic/newTip";
import MainContent from "./VideoComponent/mainContent";
// import Videobackground from "./SideNavigation/videoCard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div clasName="container-fluid">
          <PersistentDrawerLeft />
        <MainContent />

          <Switch>
            <div className="routes">
              {/* <Route exact path="/" component={Video} /> */}
              <Route path="/tips" exact component={Tips} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
