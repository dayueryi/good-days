import React, { Component } from 'react';
import Footerlist from './../Footer/index.jsx';
import './index.scss';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "box">
            <div className="x-content">
                新闻
            </div>
            {/* <Footerlist/> */}
          </div>
         )
    }
}
 
export default Home;