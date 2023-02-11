import React from 'react'
import "./home.css"
import $ from 'jquery'
import { downChart as DownChart, pieChart as PieChart} from '../codes/analytics'

class Home extends React.Component {

    closeHome(ee) {
        
        $(".cupsCount").css("transform", "scale(0)")
        var t = setTimeout(() => {
            $(".cupsCount").remove()
            // Append Dashboard Elements
            $('.dashboard').css({
                display: 'grid'
            })

            // refreshHistory (Initial Load)
          
            clearTimeout(t)
        }, 450);
    }
  
    render() {
      
        return (
            <div className='cupsCount'>
                <p className='dashboardName'>DASHBOARD</p>
                <div className='countWrapper'>
              <div className='sideCountWrapRight' >        
                <div className='counts desaisI' onClick={
                  function () {
                    window.location = '/desais'
                  }
                } >
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
                
                <div className='counts doseH' onClick={
                  function () {
                    window.location = '/dose'
                  }
                }>
        <p className='countTxt'>596</p>
        <div className='countsLine'></div>
            <p className='cupTxt ctxt'>12Oz HOT</p>
            <div className='totalUsedMetricsDiv'>
          <p className='totalUsedCounts'>Total used 204 | 80%</p>
          <div className='totalUsedMetricsBar'>
            <div className='totalUsedMetricsBarChild bar-hot'></div>
          </div>
            </div>
            </div>

              </div>
              <div className='sideCountWrapLeft'>
                <div className='analyticsUp analytics'>
                  <div className='upChartRight chartright'></div>
                  <div className='upChartLeft chartright'>
                    <PieChart/>
                  </div>
                </div>
                <p style={{
                  fontSize: '1.2vw',
                  fontWeight: '400',
                  opacity: '.5'
                }}> | DAILY TARGET SALES</p>
                <div id='downChart' className='analyticsDown analytics'>
                  
                  <DownChart/>
                </div>
              </div>
        </div>
       
      </div>
           
        )
    }
}


export default Home;