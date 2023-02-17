import $ from 'jquery'
import updatePopUpSelectedData from '../codes/dashboard.js'
import React from 'react'
import cupData from '../jsons/desaisCupsHistory.json'

import '../css/dashboard.css'
import { init } from 'echarts'

// close pop up
$('.closePopUp').on('click', () => {
    $('.cover, .popUpData').css('display', 'none')
})

var active = null
var prevActive = null


$('.PPBodyDataDatesListDiv').on('click', e => {
    var en = e.currentTarget.className.split(" ")[1]
    
    var data = $(`.` + en).data('cupDataInfo')
    var totalSold = data.sales + data.grab + data.panda
    var variant = data.end - (data.beg - totalSold)
    
    var cr = variant > 0 || variant < 0 ? "linear-gradient(to right, rgba(255, 0,0,.1), transparent)" : "linear-gradient(to right, rgba(0,255,0,.1), transparent)"


    if (!active) {
        active = $(`.` + en)
         active.css({
            background: cr,
            transform: "scale(1.2)"
        })
        prevActive = active
    } else {
        
    active = $(`.`+en)
        prevActive.css({
            transform: "scale(1)",
            background: "rgba(0,0, 0, 0.432)"
        })
        active.css({
            background: cr,
            transform: "scale(1.2)"
        })

        prevActive = active
    }


    // update date
    $('.DataRightHeaderDate').text(data.date)

    // update daily cup sales
    //beg
    $('#DDBeg').text(data.beg)

        //sales
    $('#DDSales').text(data.sales)
    $('.salesDataSales').css("height", (data.sales / data.beg )* 100 +"%")

        //grab
    $('#DDGrab').text(data.grab)
    $('.salesDataGrab').css("height", (data.grab / data.beg )* 100 +"%")


        //panda
    $('#DDPanda').text(data.panda)
    $('.salesDataPanda').css("height", (data.panda / data.beg )* 100 +"%")


        //total sold
    
    $('#DDTotal').text(totalSold)
    $('.salesDataTotal').css("height", (totalSold / data.beg )* 100 +"%")


        //end
    $('#DDEnd').text(data.end)

        //variant
    
    $('#DDVariant').text(variant >= 1 ? "+" + variant : variant)
    
     $('.DLGrab').text("Grab Food: " + data.grabNum)
        $('.DLPanda').text("Food Panda: " + data.pandaNum)

    $('.notetxtMess').text(data.note)
    $('.cashier').text("Cashier :  " + data.cashier)
    
    $('.remark').text(variant > 0 || variant < 0 ? "Discrepancy" : "Balanced")
        $('.remark').css("background-color", variant > 0 || variant < 0 ? "rgba(255,0,0,.2)" : "rgba(0,255,0,.2)" )
        
    
    
})

export default class ItemsHistory extends React.Component {
    constructor(props) {
        super()
    }

    showItem(e) {
        const item = e.props.cups

        // Open Item Div
        $('.cover, .popUpData').css('display', 'grid')

        $('.PPDate').text(item.date)


        if (item.type === "desais" || item.type === "dose") {

            $('.PPBodyData').css({
                gridTemplateColumns: "100%",
                margin: "auto"
            })
            $('.salesList').css("margin-top", "-4%")
            $(".PPBodyDataLeft").hide()


            // update initial data
            $(`.DataRightHeaderDate`).text(item.date)
        
            var initData = item
            var totalSold = initData.sales + initData.grab + initData.panda
            var variant = initData.end - (initData.beg - totalSold)
        
        
            $('.DLGrab').text("Grab Food: " + initData.grabNum)
            $('.DLPanda').text("Food Panda: " + initData.pandaNum)

            $('.notetxtMess').text(initData.note)
            $('.cashier').text("Cashier :  " + initData.cashier)
            $('.remark').text(variant > 0 || variant < 0 ? "Discrepancy" : "Balanced")
            $('.remark').css("background-color", variant > 0 || variant < 0 ? "rgba(255,0,0,.2)" : "rgba(0,255,0,.2)")
        
        
            //beg
            $('#DDBeg').text(initData.beg)

            //sales
            $('#DDSales').text(initData.sales)
            $('.salesDataSales').css("height", (initData.sales / initData.beg) * 100 + "%")

            //grab
            $('#DDGrab').text(initData.grab)
            $('.salesDataGrab').css("height", (initData.grab / initData.beg) * 100 + "%")


            //panda
            $('#DDPanda').text(initData.panda)
            $('.salesDataPanda').css("height", (initData.panda / initData.beg) * 100 + "%")


            //total sold
            $('#DDTotal').text(totalSold)
            $('.salesDataTotal').css("height", (totalSold / initData.beg) * 100 + "%")


            //end
            $('#DDEnd').text(initData.end)

            //variant
    
            $('#DDVariant').text(variant >= 1 ? "+" + variant : variant)

        
        }
        
        else if (item.type === "weekly") {
        
            
            // update initial data
            $(`.DataRightHeaderDate`).text(item.dailySales[0].date)
        
            var initData = item.dailySales[0]
            var totalSold = initData.sales + initData.grab + initData.panda
            var variant = initData.end - (initData.beg - totalSold)

            var color = variant < 0 || variant > 0 ? "linear-gradient(to right, rgba(255, 0,0,.1), transparent)" : "linear-gradient(to right, rgba(0, 255,0,.1), transparent)"
            $('.DR0').css({
                background: variant > 0 || variant < 0 ? "red" : "green"
            })
            $('.date0').css({
                background: color,
                transform: "scale(1.1)"
            })

            // init data
            $('#DDBeg').text(initData.beg)
            $('#DDSales').text(initData.sales)
            $('#DDGrab').text(initData.grab)
            $('#DDPanda').text(initData.panda)
            $('#DDTotal').text(initData.sales + initData.grab + initData.panda)
            $('#DDEnd').text(initData.end)
            $('#DDVariant').text((initData.beg - (initData.sales + initData.grab + initData.panda)-initData.end))
            item.dailySales.map((data, i) => {
            
            // update dates div
            $(`.ddate` + i).text(data.date)
            $(`.date` + i).data('cupDataInfo', data)

            var mark = data.end - (data.beg - (data.sales + data.grab + data.panda))

                $(`.DR` + i).css("background-color", mark > 0 || mark < 0 ? "red" : "green")
                            
        })

        }
        
    }

    render() {
    
var totalUsedCups = this.props.cups.sales + this.props.cups.grab + this.props.cups.panda 
var totalCups = this.props.cups.beg - totalUsedCups
var remarksTally = this.props.cups.end - totalCups
var remarks = remarksTally > 0 || remarksTally < 0 ? "red" : "green"

        const _this = this

        
        return (

            <div className='historyItems' onClick={
                
                    function() {
                                _this.showItem(_this)
                    }
                
            }> 
        <p className='cupsDate' style={{
              background: remarksTally > 0 || remarksTally < 0 ? "linear-gradient(30deg, rgba(255, 23, 23, 0.459) 5%, transparent 80%)" : "linear-gradient(30deg, rgba(4, 255, 100, 0.259) 5%, transparent 80%)"
          }}>{this.props.cups.date}  </p>
        <div className='cupsInfo'>
        <p className='cupsInfosText sales'>{this.props.cups.sales}</p>
        <p className='cupsInfosText'>+</p>
        <p className='cupsInfosText gp'>{this.props.cups.grab + this.props.cups.panda}</p> 
        <p className='cupsInfosText'>=</p>
        <p className='cupsInfosText'>{totalUsedCups}</p>
        <p className='cupsInfosText'>-</p>
        <p className='cupsInfosText beg'>{this.props.cups.beg}</p>
        <p className='cupsInfosText'>=</p>
        <p className='cupsInfosText'>{totalCups}</p>
        <p className='cupsInfosText'>-</p>
        <p className='cupsInfosText ac'>{this.props.cups.end}</p>
        <p className='cupsInfosText'>=</p>
        <p className='cupsInfosText'> {this.props.cups.end - totalCups} </p>
                    <div className='cupsInfosText cupsInfoRemarks' style={{
              backgroundColor: remarks
          }}>
          </div>
        </div>
        </div>
        )
    }
}
