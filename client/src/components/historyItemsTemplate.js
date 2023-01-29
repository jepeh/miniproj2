import $ from 'jquery'

export default class HistoryItems {
    constructor(props){
        this.props = props
        this.history = ``
        
    }
showSelectedHistory(){
    const cupsData = $(`#${this.id}`).data()

    var popUpData = document.createElement('div')
    popUpData.className = 'popUpData'
    var cover = document.createElement('div')
    cover.className = 'cover'

    var closePopUp = document.createElement('p')
    closePopUp.className = 'closePopUp'
    closePopUp.innerText = 'EXIT'
    closePopUp.addEventListener('click', ()=>{
        //close popups
        //clear thee popdata body to refresh data
        $('.popUpData, .cover').hide()
        $('.popUpDataBody').html('')
    })
    popUpData.append(closePopUp)

    $('body').append(cover)
    $('body').append(popUpData)
}
    generateHistory(){

var totalUsedCups = this.props.cupsInfo.sales + this.props.cupsInfo.gp;
var totalCups = this.props.cupsInfo.beg - totalUsedCups
var remarksTally = this.props.cupsInfo.endCount - totalCups
var remarks = remarksTally > 0 || remarksTally < 0 ? "red" : "green"


            this.history = document.createElement('div')
            this.history.id = this.props.id
            $(`#${this.props.id}`).data("historyData", this.props)
            this.history.className = 'historyItems'
            
            this.history.onclick = this.showSelectedHistory

            var cupsdate = document.createElement('p')
            cupsdate.className = "cupsDate"
            cupsdate.innerText = this.props.date +"     |"
            this.history.append(cupsdate)

            var cupsInfo = document.createElement('div')
            cupsInfo.className = "cupsInfo"
            

            //sales
            var cupsInfo1 = document.createElement('p')
            cupsInfo1.className = "cupsInfosText sales"
            cupsInfo1.innerText = this.props.cupsInfo.sales
            cupsInfo.append(cupsInfo1)

            //add
            var cupsInfoAdd = document.createElement('p')
            cupsInfoAdd.className = "cupsInfosText"
            cupsInfoAdd.innerText = "+"
           cupsInfo.append(cupsInfoAdd)

            //gp
            var cupsInfo2 = document.createElement('p')
            cupsInfo2.className = "cupsInfosText gp"
            cupsInfo2.innerText = this.props.cupsInfo.gp
            cupsInfo.append(cupsInfo2)

            //total
            var cupsInfoTotal = document.createElement('p')
            cupsInfoTotal.className = "cupsInfosText"
            cupsInfoTotal.innerText = "="
            cupsInfo.append(cupsInfoTotal)

            //totalUseds
            var cupsInfo3 = document.createElement('p')
            cupsInfo3.className = "cupsInfosText"
            cupsInfo3.innerText = totalUsedCups
            cupsInfo.append(cupsInfo3)

            //minus beg
            var cupsInfoMinusBeg= document.createElement('p')
            cupsInfoMinusBeg.className = "cupsInfosText"
            cupsInfoMinusBeg.innerText = "-"
            cupsInfo.append(cupsInfoMinusBeg)

            //beg
            var cupsInfo4 = document.createElement('p')
            cupsInfo4.className = "cupsInfosText beg"
            cupsInfo4.innerText = this.props.cupsInfo.beg
            cupsInfo.append(cupsInfo4)

            // beg total sign =
            var cupsInfoBegTotalSign = document.createElement('p')
            cupsInfoBegTotalSign.className = "cupsInfosText"
            cupsInfoBegTotalSign.innerText = "="
            cupsInfo.append(cupsInfoBegTotalSign)


            //beg - total
            var cupsInfoBegTotal = document.createElement('p')
            cupsInfoBegTotal.className = "cupsInfosText"
            cupsInfoBegTotal.innerText = totalCups
            cupsInfo.append(cupsInfoBegTotal)

            //total - end count minus
            var cupsInfoEndMinus = document.createElement('p')
            cupsInfoEndMinus.className = "cupsInfosText"
            cupsInfoEndMinus.innerText = '-'
            cupsInfo.append(cupsInfoEndMinus)

            //actual count end
            var cupsInfo5 = document.createElement('p')
            cupsInfo5.className = "cupsInfosText ac"
            cupsInfo5.innerText = this.props.cupsInfo.endCount
            cupsInfo.append(cupsInfo5)

            // end total
            var cupsInfoTotalSign = document.createElement('p')
            cupsInfoTotalSign.className = "cupsInfosText"
            cupsInfoTotalSign.innerText = '='
            cupsInfo.append(cupsInfoTotalSign)


            // variance
            var cupsInfo6 = document.createElement('p')
            cupsInfo6.className = "cupsInfosText"
            cupsInfo6.innerText = remarksTally
            cupsInfo.append(cupsInfo6)

            //remarks
            var cupsInfoRemarks = document.createElement('div')
            cupsInfoRemarks.className = "cupsInfosText cupsInfoRemarks"
            cupsInfoRemarks.style.backgroundColor = remarks
            cupsInfo.append(cupsInfoRemarks)


        this.history.append(cupsInfo)



       /* this.history = `<div class='historyItems' props='teete' onclick='gaga'> 
        <p class='cupsDate'>${this.props.date}  |</p>
        <div class='cupsInfo'>
        <p class='cupsInfosText sales'>${this.props.cupsInfo.sales}</p>
        <p class='cupsInfosText'>+</p>
        <p class='cupsInfosText gp'>${this.props.cupsInfo.gp}</p> 
        <p class='cupsInfosText'>=</p>
        <p class='cupsInfosText'>${totalUsedCups}</p>
        <p class='cupsInfosText'>-</p>
        <p class='cupsInfosText beg'>${this.props.cupsInfo.beg}</p>
        <p class='cupsInfosText'>=</p>
        <p class='cupsInfosText'>${totalCups}</p>
        <p class='cupsInfosText'>-</p>
        <p class='cupsInfosText ac'>${this.props.cupsInfo.endCount}</p>
        <p class='cupsInfosText'>=</p>
        <p class='cupsInfosText'> ${this.props.cupsInfo.endCount - totalCups} </p>
          <div class='cupsInfosText cupsInfoRemarks' style="background-color: ${remarks}">
          </div>
        </div>
        </div>`*/
    }

    getHistory(){
        return this.history
    }
}