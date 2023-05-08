import React from "react";
import './sidebar.css';
import  { BrowserRouter as Router, Route, NavLink , Routes as Switch, Routes} from "react-router-dom";
import Home from './home.js'

export default class Sidebar extends React.Component {
    refresh(e) {
        var loc = e.target.href
         window.location = loc
    }
    render(){
        return (
            <div className="sideBar">

                <div className="tcbLogo">
                    <img src="../../images/tcb.png" alt="f" className="logo"/>
                </div>
                <div>
                    {/* Router , Routes */}
                    <Router>
                        <NavLink className="navlink" exact="true" to="/" onClick={this.refresh}>Home</NavLink>
                        <NavLink className="navlink" to="/desais" onClick={this.refresh}>DeSais - Ice</NavLink>
                        <NavLink className="navlink" to="/dose" onClick={this.refresh}>Dose - Hot</NavLink>
                        <NavLink className="navlink" to="/weekly" onClick={this.refresh}>Weekly Cups</NavLink>
                        <NavLink className="navlink" to="/docs" onClick={this.refresh}>Documentation</NavLink>
                    </Router>
                    
                </div>

            </div>
    );
    }
}