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

class DashboardContainer extends React.Component {

render () {
    return(
      <div className='dashboard'>
        <div className='navigation'>
            <p className='navs'>History</p>
            <p className='navs'>Purchase</p>
            <p className='navs'>Documentations</p>
        </div>
        <div className='legends' onClick={refreshHistory}>
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
            <p className='itemL sales'>sales</p>
            <p className='itemL gp'>grab & panda</p>
            <p className='itemL beg'>beginning</p>
            <p className='itemL ac'>end count</p>
        </div>
      </div>           
    )
}
}





export default DashboardContainer