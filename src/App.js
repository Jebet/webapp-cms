import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import PersistentDrawerLeft from "./SideNavigation/SideNav";
<<<<<<< HEAD
import Video from "./VideoComponent/Videobackground";
import Tips from "./Topic/newTip";
import Articles from "./Articles/Articles"
=======
// import Video from "./VideoComponent/Videobackground";
import Tips from "./Tips/newTip";
>>>>>>> 0ced6aba63561f35d5979dc42d39449b79cebcee
import MainContent from "./VideoComponent/mainContent";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <PersistentDrawerLeft />
         
          <Switch>
            <div className="routes">
<<<<<<< HEAD
               <Route exact path="/articles" component={Articles} /> 
=======
              <Route exact={true} path="/video" component={MainContent} />
>>>>>>> 0ced6aba63561f35d5979dc42d39449b79cebcee
              <Route path="/tips" exact component={Tips} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
