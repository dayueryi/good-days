import React, { Component } from 'react';
import {Icon, Button ,Menu} from 'antd'; 
import {Link} from 'react-router-dom';
import './index.scss';
const SubMenu = Menu.SubMenu;
class Subject extends Component {
    state = {
        collapsed: false,
    }
    render() { 
       
     return  (
       <div className="box">
       <div className="x-content">
        <div className="l-subject" style={{ width: 150,height:900}}>
       
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
        
          <Menu.Item key="1">
          <Link to="/subject/1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
         </Link>  
         </Menu.Item>
         
          <Menu.Item key="2">
          <Link to="/subject/2">
            <Icon type="desktop" />
            <span>Option 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/subject/3">
            <Icon type="inbox" />
            <span>Option 3</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
          <Link to="/subject/4">
            <Icon type="inbox" />
            <span>Option 4</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
          <Link to="/subject/5">
            <Icon type="inbox" />
            <span>Option 5</span>
            </Link>
          </Menu.Item>
          
        </Menu>
      </div>
      </div>
      </div>
         )
    }
}
 
export default Subject;