import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListAlbum from './component/ListAlbum';
import Gallery from './component/Gallery';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <ListAlbum/>
      
      <Switch>
          <Route path="/album/:id">
          <Gallery/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
