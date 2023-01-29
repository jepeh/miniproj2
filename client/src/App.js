
import './App.css';
import React from 'react'
import HomeComponent from './components/homeComponent.js'
import {DashboardContainer} from './components/dashboardComponents.js';


export class Container extends React.Component {

  render() {
    
    return(
      <div className='container'>
        <HomeComponent/>
        <DashboardContainer/>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
       <Container/>
    </div>
  );
}

export default App;