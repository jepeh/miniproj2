import React from 'react'
import "../css/anim.css"
import $ from 'jquery'
import { refreshHistory } from './dashboardComponents.js'

class HomeComponent extends React.Component {

   
    closeHome(ee) {
        
        $(".cupsCount").css("transform", "scale(0)")
        var t = setTimeout(() => {
            $(".cupsCount").remove()
            // Append Dashboard Elements
            $('.dashboard').css({
                display: 'grid'
            })

            // refreshHistory (Initial Load)
            refreshHistory()
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
          <div className='countsLine'></div>
          <p className="cupTxt ctxt">16Oz ICE</p>

          <div className='totalUsedMetricsDiv'>
          <p className='totalUsedCounts'>Total used 345 | 76%</p>
          <div className='totalUsedMetricsBar'>
            <div className='totalUsedMetricsBarChild bar-ice'></div>
          </div>
            </div>
        </div>
        <div className='counts desaisH'>
        <p className='countTxt'>596</p>
        <div className='countsLine'></div>
            <p className='cupTxt ctxt'>16Oz HOT</p>
            <div className='totalUsedMetricsDiv'>
          <p className='totalUsedCounts'>Total used 204 | 30%</p>
          <div className='totalUsedMetricsBar'>
            <div className='totalUsedMetricsBarChild bar-hot'></div>
          </div>
            </div>

        </div>
        </div>
       <p className='cupsDetails' onClick={this.closeHome}>See Details</p>
      </div>
           
        )
    }
}


export default HomeComponent;