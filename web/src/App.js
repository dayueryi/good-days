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
  constructor(props){
    super(props);
    this.state={
      flag:true
    }
  }
  render() {
    return (
      <div className="App">
      <header>

          <Headerlist flag={this.state.flag}/>
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
<<<<<<< HEAD
              <Route path="/activedetail" component={ActiveDetail}/>
              <Redirect to={{pathname:'/home'}}/>
=======
              
>>>>>>> a23a6468135a24f8a57e8711fc659d9253b04aa4
          </Switch>
      </div>
       
       
      </div>
    );
  }
  componentDidMount(){
  
    console.log(this.props.location.pathname)
    if(this.props.location.pathname=="/subject"){
          this.setState({
            flag : false
          })
    }else{
      this.setState({
        flag : true
      })
    }
  }
}

export default App;
