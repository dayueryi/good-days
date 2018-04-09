import React, { Component } from 'react';

import Bannerlist from './banner/index.jsx';

import HotActive from './hotActive/index.jsx';
import HotShow from './hotShow/index.jsx';
import HotSubject from './hotSubject/index.jsx';
import Address from './address/index.jsx';
import Footer from './../Footer/index.jsx';

import './index.scss';



class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "box">
             
            <div className="x-content">
            <Bannerlist/>
            <HotActive/>
            <Address/>
            <HotShow/>
            <HotSubject/>
            <Footer/>
           
            </div>
           
          </div>

         )
    }
}
 
export default Home;