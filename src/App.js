import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PersistentDrawerLeft from "./SideNavigation/SideNav";
import Video from "./VideoComponent/Videobackground";
import Tips from "./Tips/newTip";
import Articles from "./Articles/Articles";
import Videobackground from "./VideoComponent/Videobackground";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <PersistentDrawerLeft />
          <Videobackground />
          {/* <Switch>
            <div className="routes">
              <Route exact path="/articles" component={Articles} />
              <Route path="/tips" exact component={Tips} />
            </div>
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
