import React, { Component } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import Active from './components/main/Active/index.jsx';
import Show from './components/main/Show/index.jsx';
import Subject from './components/main/Subject/index.jsx';
import Home from "./components/main/Home/index.jsx";
import './App.css';

// import './index.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/active" component={Active}/>
          <Route path="/show" component={Show}/>
          <Route path="/subject" component={Subject}/>
          <Redirect to={{pathname:'/home'}}/>
        </Switch>
      </div>
    );
  }
}

export default App;
