import React from 'react'
import "../css/anim.css"
import $ from 'jquery'

class HomeComponent extends React.Component {

   
    closeHome(ee) {
        
        $(".cupsCount").css("transform", "scale(0)")
        var t = setTimeout(() => {
            $(".cupsCount").remove()
            // Append Dashboard Elements
            $('.dashboard').css({
                display: 'grid'
            })
            clearTimeout(t)
        }, 450);
    }
  
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
       <p className='cupsDetails' onClick={this.closeHome}>See Details</p>
      </div>
           
        )
    }
}


export default HomeComponent;