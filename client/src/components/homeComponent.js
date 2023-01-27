import React from 'react'
import "../animations/anim.css"

const closeHome = function() {
    
}

class Home extends React.Component {
    render() {
        return (
            <div className='cupsCount'>
                <p className='cupsDateCurrent'>as of January 27, 2023</p>
                <div className='countWrapper'>
        <div className='counts desaisI'>
          <p className='countTxt' id='iceCupsCount'>1,324</p>
          
          <p className="cupTxt ctxt">16oz Ice</p>
        </div>
        <div className='counts desaisH'>
        <p className='countTxt'>596</p>
            <p className='cupTxt ctxt'>16oz Hot</p>
        </div>
        </div>
       <p className='cupsDetails' onClick={closeHome}>See Details</p>
      </div>
           
        )
    }
}


export default Home;