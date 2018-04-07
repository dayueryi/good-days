import React, { Component } from 'react';
import { Route,Switch,Redirect,NavLink } from 'react-router-dom';

import Active from './components/main/Active/index.jsx';
import Show from './components/main/Show/index.jsx';
import Subject from './components/main/Subject/index.jsx';
import Home from "./components/main/Home/index.jsx";
import Headerlist from "./components/main/Header/index.jsx";
import Newslist from "./components/main/News/index.jsx";
import NewsDetail from "./components/main/News/NewsDetail/index.jsx";
import Forumlist from "./components/main/Forum/index.jsx";
import ServicePrice from "./components/main/ServicePrice/index.jsx";
import ActiveDetail from './components/main/Active/ActiveDetail/index.jsx';
import SubjectDetail from './components/main/Subject/SubjectDetail/index.jsx';


import store from '@/store/index.js';
// import ShowDetail from './components/main/Show/ShowDetail/index.jsx';
import './App.css';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content ,Menu,Breadcrumb} = Layout;

// import './index.scss';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      flag:true,
      val:"",//用来储存输入框中的值
    }
  }
 //通过事件对象得到输入框中的值
 getValHandler(event){
  this.setState({
    val: event.target.value
  })
}
//添加一个TODOitem，派发一个action
searchDataHandler(){
  console.log(this.state.val)
  store.dispatch({
    type: "SEARCH_DATA_ITEM",
    data: this.state.val
  })
}
  render() {
    return (
      <div className="App">
      <header>

          <Headerlist 
              flag={this.state.flag} 
              todolist = { store.getState().todolist }
              getVal = { this.getValHandler.bind(this)}
              onClick = { this.searchDataHandler.bind(this) }/>
      </header>
      <div className="container">
           <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/active" component={Active}/>
              {/* <Route path="/show/showDetail/:templateID" component={ShowDetail}/> */}
              <Route path="/subject/subjectDetail/:subjectID" component={SubjectDetail}/>
              <Route path="/activedetail" component={ActiveDetail}/>
              <Route path="/show" component={Show}/>
              <Route path="/subject" component={Subject}/>
              <Route path="/news/:pageID" component={Newslist}/>
              <Route path="/news" component={Newslist}/>
              <Route path="/newsdetail/:newsID" component={NewsDetail}/>
              <Route path="/forum" component={Forumlist}/>
              <Route path="/servicePrice" component={ServicePrice}/>
              
          </Switch>
      </div>
       
       
      </div>
    );
  }
  
  componentDidMount(){
  
    // console.log(this.props.location.pathname)
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
