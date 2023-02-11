import './App.css'
import './css/dashboard.css'
import Sidebar from './components/sidebar'
import React from 'react'
import Home from './components/home'
import  { BrowserRouter as Router, Route, NavLink , Routes as Switch, Routes} from "react-router-dom";
import { DashboardContainer as DashBoard, refreshHistory as RF } from './components/dashboard.js';
import './css/dashboard.css'

export default class Container extends React.Component {

  refreshApp() {
    
    alert(true)

  }

  render() {
    
    return (
      
      <div className='container'>
        <Sidebar></Sidebar> 
        <div>
        <Router forceRefresh>
          <Routes forceRefresh>
            <Route exact="true" path="/" element={<Home />}></Route>
              <Route path="/desais" element={<DashBoard cup="desais"/>}></Route>
              <Route path="/dose" element={<DashBoard cup="dose" />}></Route>
             <Route path="/performance" element={<Home/>}></Route>
             <Route path="/docs" element={<Home />}></Route>        
          </Routes>
          </Router>
          </div>
      </div>
    ) 
  }
}