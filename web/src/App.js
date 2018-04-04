import React, { Component } from 'react';
import { Route,Switch,Redirect,NavLink } from 'react-router-dom';

import Active from './components/main/Active/index.jsx';
import Show from './components/main/Show/index.jsx';
import Subject from './components/main/Subject/index.jsx';
import Home from "./components/main/Home/index.jsx";
import Headerlist from "./components/main/Header/index.jsx";
import Newslist from "./components/main/News/index.jsx";
import Forumlist from "./components/main/Forum/index.jsx";
import Appointmentlist from "./components/main/Appointment/index.jsx";
import ActiveDetail from './components/main/Active/ActiveDetail/index.jsx'
import './App.css';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content ,Menu,Breadcrumb} = Layout;

// import './index.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
          <Headerlist/>
      </header>
      <div className="container">
           <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/active" component={Active}/>
              <Route path="/show" component={Show}/>
              <Route path="/subject" component={Subject}/>
              <Route path="/news/:pageID" component={Newslist}/>
              <Route path="/forum" component={Forumlist}/>
              <Route path="/appointment" component={Appointmentlist}/>
              <Route path="/activedetail" component={ActiveDetail}/>
              
          </Switch>
      </div>
       
       
      </div>
    );
  }
}

export default App;
