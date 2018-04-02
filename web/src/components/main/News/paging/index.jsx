import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./paging.scss"
class Paging extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allPageNum:0
         }
    }
    componentDidMount(){
     
    }
    render() { 
        return ( 
            <ul className="w_news_paging">
            {}
                <li>
               < NavLink to="/news/2" activeclass = "active">  
                    1
                    
                </NavLink>      
             </li>
             <li>
               < NavLink to="/news/3" activeclass = "active">  
                    1
                </NavLink>      
             </li>
            </ul>
         )
    }
}
 
export default Paging;