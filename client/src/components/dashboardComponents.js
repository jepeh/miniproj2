import React from 'react'
import '../App.css'
import '../css/dashboard.css'
import $ from 'jquery'
import HistoryItems from './historyItemsTemplate.js'

function refreshHistory() {
    for (var i=0; i<=10; i++) {
       
            
        var item = new HistoryItems({
            id: "HI123",
            date: 'Jan 22-Jan 30',
            cupsInfo: {
                sales: 100,
                gp: 100,
                beg: 1000,
                endCount: 800
            }
        })
        
        item.generateHistory()
        var itemDiv = item.getHistory()
    
        $(".dashBody").append(itemDiv)
    
    }
}
// mao

function showLegends(e){
    e.preventDefault();
    var id = e.target.className.split(' ')[1]
    var xx = e.screenX
    var yy = e.screenY

    $('.legendsDivPop').css({
        display: 'grid',
        animation: 'pop .2s',
        left: xx - window.innerWidth * .1 +'px',
        top: yy - window.innerHeight * .30 +'px'
    })

    var message = '';

    switch(id) {
        case  'sales':
            message = "Sales is the total cups used all over the said date of the week inside the store or dine in only. Any cups used outside the store are not counted in sales."
            break;
        case 'gp' :
            message = "Grab and Panda is the total cups used to deliver drinks outside the store and are only counted if the product(s) is/are bought through Grab and Panda."
            break;
        case 'beg' :
            message = 'Beginning is the total cups that was the end count of the previous weekly inventory. It will be the base to calculate the cups used for this week.'
            break;
        case 'ac':
            message = 'End Count is the actual counting of the remaining cups in reserve and working inventory. it will be the base of the final calculation and to decide if the weekly inventory is balance or in descripancy.'
            break;
        default:
    }

    $('.legendsDivPopText').text(message)

}
function hideLegends(){
    
    $('.legendsDivPop').hide()
}

class DashboardContainer extends React.Component {

render () {
    return(
      <div className='dashboard'>
        <div className='navigation'>
            <p className='navs'>History</p>
            <p className='navs'>Purchase</p>
            <p className='navs'>Documentations</p>
        </div>
        <div className='legends'>
            <p></p>
            <div className='legendsDiv'>
                <div className='dot dotBal'></div>
                <p className='legendsTxt'>Balanced</p>
            </div>
            <div className='legendsDiv'>
                <div className='dot'></div>
                <p className='legendsTxt'>Descrepancy</p>
            </div>
            <p className='addnewhistory'>Add New</p>
        </div>
        <div className='dashBody' id="dashb">
        

        </div>
        <div className='itemLegends'>
            <div></div>
            <p className='itemL sales' onMouseOver={showLegends} onMouseLeave={hideLegends}>Sales / Dine</p>
            <p className='itemL gp' onMouseOver={showLegends} onMouseLeave={hideLegends}>Grab & Panda</p>
            <p className='itemL beg' onMouseOver={showLegends} onMouseLeave={hideLegends}>Beginning</p>
            <p className='itemL ac' onMouseOver={showLegends} onMouseLeave={hideLegends}>End Count</p>
            <div></div>
        </div>
      </div>           
    )
}
}

export {refreshHistory, DashboardContainer}