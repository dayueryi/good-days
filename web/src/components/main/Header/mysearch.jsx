
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { Route,Switch,Redirect,NavLink ,Link} from 'react-router-dom';
// import React, { Component } from 'react';
// import './index.scss';
// import logo from '@/img/logo.png';
// import $ from 'jquery';
// const { Header, Content, Footer } = Layout;
// const Header = function(props) {
//     return  ( 
    
      
//         <div className = "x-container">
//         <div className="x-header">
//             <div className="logo">
//                 <img src={logo} alt="111"/>
//             </div>
//             <div className="search">
              
//                 <input type="text"/>
//                 <span >搜索</span>
//             </div>
            
//             <ul className="x-ul">
//             <li >
//                   <NavLink to="/home" activeClassName="active">
//                     <span>首页</span>
//                     {/* <span>Home</span> */}
//                   </NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/show" activeClassName="active">
                
//                   <span>最美客照</span>
//                   {/* <span>Show</span> */}
//                   </NavLink>
//                 </li>
//                 <li className="ul_li">
//                 {/* <NavLink to="/subject" activeClassName="active">
//                   <span>
//                     主题类型
//                   </span>
//                 </NavLink> */}
//                 {str}
//                     <ul className="small_ul">
//                     <li>
//                       <Link to="/subject/subjectKind=0">
//                           内景
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/subject/subjectKind=1">
//                           外景
//                       </Link>
//                     </li>
//                   </ul>
                  
//                   {/* <span>Subject</span> */}
                  
                 
//                 </li>
//                 <li>
//                 <NavLink to="/active" activeClassName="active">
//                   <span>最新活动</span>
//                   {/* <span>Active</span> */}
//                   </NavLink>
//                 </li>  
//                 <li>
//                 <NavLink to="/news/1" activeClassName="active">
//                 <span> 新闻中心</span>
//                {/* <span>News</span> */}
//                   </NavLink>
//                 </li> 
//                 <li>
//                 <NavLink to="/forum" activeClassName="active">
//                 <span>粉丝论坛</span>
//                 {/* <span>Forum</span> */}
//                   </NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/appointment" activeClassName="active">
//                   <span>在线预约</span>
//                   {/* <span>Appointment</span> */}
//                 </NavLink>
//                 </li> 
//             </ul>
//             </div>
        
//         </div>
      
//          );
    
//     componentDidMount(){
//         $(".ul_li").click(function(){
//           $(".small_ul").slideToggle("slow");
//         })
//         $(".ul_li").mouseleave(function(){
//           $(".small_ul").slideUp("slow");
//         })
//     }
// }
 
// export default Header;