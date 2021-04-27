import React from 'react'
import './App.css';
import {Kitty} from "./components/Kitty";
import {Breeds} from "./components/Breeds";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {BreedInfo} from "./components/BreedInfo";

function App() {
  return (
    <div>

      <Router>
          <Route exact path="/" component={Breeds}/>
          <Route path="/breed/:id" component={BreedInfo}/>
      </Router>
    </div>
  );
}

export default App;
