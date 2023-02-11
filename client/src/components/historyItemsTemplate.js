import $ from 'jquery'
import updatePopUpSelectedData from '../codes/dashboard.js'
import React from 'react'
import '../css/dashboard.css'

// close pop up
$('.closePopUp').on('click', () => {
    $('.cover, .popUpData').css('display', 'none')
})

export default class ItemsHistory extends React.Component {
    constructor(props) {
        super()
    }

    showItem(e) {
        const item = e.props.cups

        // Open Item Div
        $('.cover, .popUpData').css('display', 'grid')
    }

    render() {
    
var totalUsedCups = this.props.cups.cupsInfo.sales + this.props.cups.cupsInfo.gp;
var totalCups = this.props.cups.cupsInfo.beg - totalUsedCups
var remarksTally = this.props.cups.cupsInfo.endCount - totalCups
var remarks = remarksTally > 0 || remarksTally < 0 ? "red" : "green"

        const _this = this

        
        return (

            <div className='historyItems' onClick={
                
                    function() {
                                _this.showItem(_this)
                    }
                
          }> 
        <p className='cupsDate'>{this.props.cups.date}  |</p>
        <div className='cupsInfo'>
        <p className='cupsInfosText sales'>{this.props.cups.cupsInfo.sales}</p>
        <p className='cupsInfosText'>+</p>
        <p className='cupsInfosText gp'>{this.props.cups.cupsInfo.gp}</p> 
        <p className='cupsInfosText'>=</p>
        <p className='cupsInfosText'>{totalUsedCups}</p>
        <p className='cupsInfosText'>-</p>
        <p className='cupsInfosText beg'>{this.props.cups.cupsInfo.beg}</p>
        <p className='cupsInfosText'>=</p>
        <p className='cupsInfosText'>{totalCups}</p>
        <p className='cupsInfosText'>-</p>
        <p className='cupsInfosText ac'>{this.props.cups.cupsInfo.endCount}</p>
        <p className='cupsInfosText'>=</p>
        <p className='cupsInfosText'> {this.props.cups.cupsInfo.endCount - totalCups} </p>
                    <div className='cupsInfosText cupsInfoRemarks' style={{
              backgroundColor: remarks
          }}>
          </div>
        </div>
        </div>
        )
    }
}
