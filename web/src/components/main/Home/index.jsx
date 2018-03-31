import React, { Component } from 'react';
import Navlist from './nav/index.jsx';
import Bannerlist from './banner/index.jsx';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './index.scss';

class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "x-home">
                {/* <Switch>
                  <Route path="/home/nav" component={Navlist}/>
                </Switch> */}
            <Navlist/>
            <Bannerlist/>
          </div>

         )
    }
}
 
export default Home;