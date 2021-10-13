import React from "react";
import "./App.css";
import ListAlbum from "./component/ListAlbum";
import Gallery from "./component/Gallery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <ListAlbum />
          <Switch>
            <Route path="/album/:id/:title">
              <Gallery />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
