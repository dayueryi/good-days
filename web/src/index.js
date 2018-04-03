import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
<<<<<<< HEAD
import Chat from './components/main/Chat/index.jsx'

=======
import store from "@/store/index.js"
>>>>>>> a23a6468135a24f8a57e8711fc659d9253b04aa4
import Login from './components/main/Login/login.jsx';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
<<<<<<< HEAD
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/chat" component={Chat} />
            <Route path = "/login" component = { Login } />
            <Route path = "/" component = { App } />
        </Switch>
</Router>  
, document.getElementById('root'));
=======
function render(){

    ReactDOM.render(
        <Router>
            <Switch>
              
                <Route path = "/login" component = { Login } />
                <Route path = "/" component = { App } />
            </Switch>
    </Router>  
    , document.getElementById('root'));
}
render()
store.subscribe(render) 
>>>>>>> a23a6468135a24f8a57e8711fc659d9253b04aa4
registerServiceWorker();
