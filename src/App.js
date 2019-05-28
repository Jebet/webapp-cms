import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PersistentDrawerLeft from "./SideNavigation/SideNav";
import Video from "./VideoComponent/Videobackground";
// import Tips from "./Tips/newTip";
import Topics from "./Topic/Topic"
import Articles from "./Articles/Articles";
import Videobackground from "./VideoComponent/Videobackground";
// import mainContent from './VideoComponent/mainContent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <PersistentDrawerLeft />
          {/* <Topics/> */}
          <Switch>
            <div className="routes">
              <Route exact path="/articles" component={Articles} />
              <Route path="/tips" exact component={Topics} />
              <Route path="/video" component={Videobackground} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
