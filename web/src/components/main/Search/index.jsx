import React, { Component } from 'react';
import Footer from './../Footer/index.jsx';
import './index.scss';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
import SearchCon from './searchCon/index.jsx';
import Header from './../Header/index.jsx';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
        <div className="box">
        <div className="x-content">
        <div className="center">
        <h1 className="pngTitle">婚纱摄影客片</h1>
        <div className="module-c-r major-list-outer">
            <SearchCon/>
                
        </div>
        </div>
            <Footer/>
        </div>
              
        </div>

         )
    }
    // getData(subjectKindName){
    //     // console.log(subjectKindName);
    //     myajax.fetch({
    //       url:"http://localhost:4000/api/address/searchapi?type="+subjectKindName,
    //       options:{},
    //       success:((data)=>{
    //         console.log("xqqxqq",data)
    //       store.dispatch({
    //           type:"subjectKindNameList",
    //           data:data
    //         })
    //         console.log(store.getState().subjectKindName,"==== =====  search  ====");
    //       })
    //   })
    //   }
    // componentDidMount() {
    //     console.log(this);
    //     // this.getData(getVal);
    //     // console.log(store.getState().subjectKindName);
    //     var getInput = this.refs.getKeys;
    //     console.log(getInput);
    //         // this.getData(getVal);
          
    //   }
     
   
}
 
export default Home;