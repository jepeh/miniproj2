import React from "react";
import ReactEcharts from 'echarts-for-react'
import '../components/home.css'

class downChart extends React.Component {
   
    option = {
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        tooltip: {
            trigger: 'item'
        },
    yAxis: {},
    legend: {
        top: 'top',
        orient: 'horizontal',
        data: ['bar']
        },
    
        series: [
            {
                type: 'bar',
                data: [60, 30,40,56,45,34]
            },
            {
                type: 'bar',
                data: [23,23,54,64,75,86]
            },
        ]
    }
   
    render() {
        return (
            <ReactEcharts option={ this.option} className="downChartUI"/>
        )
    }
}

class pieChart extends React.Component {
    opt = {
    title: {
        text: 'Sales Metric',
        left: 'center',
        top: -5
        },
          tooltip: {
              trigger: 'item'
        },
        visualMap: {
            show: true,
            type: 'continuous',
            bottom: 30,
            itemHeight: 200,
            left: -10,
            splitNumber: 5,
            itemGap: 20,
            min: 1,
            max: 100,
            color: 'green',
            inRange: {
                colorLightness: [.7, 0],
                color: 'green'
            }
          },
        series: {
            
             name: 'Cup Sales',
      type: 'pie',
            data: [
                {
                    value: 20,
                    name: 'Dine'
                }, {
                    value: 80,
                    name: 'Panda'
                }, {
                    value: 30,
                    name: 'Grab Food'
                },
                {
                    value: 30,
                    name: "Takeout"
                },
                {
                    value: 50,
                    name: 'gege'
                },
                {
                    value: 5,
                    name: 'herer'
                }
            ].sort(function (a, b) {
        return a.value - b.value;
      }),
            roseType: 'area',
            showEmptyCircle: true,
            legendHoverLink: true,
            label: {
                fontSize: 15,
                opacity: .6,
                fontFamily: 'Quicksand',
                color: 'white',
                
                show: true,
                position: 'outside', 
               
            },
            itemStyle: {
                 color: 'rgba(0, 100,0,.8)',
        shadowBlur: 20,
        shadowColor: 'rgba(0,0,0,.8)'
                },
                labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.6,
        length: 2,
        length2: 20
      }
        }
    } 
    
    render() {
        return (
            <ReactEcharts option={this.opt} className="upPieChartUI"/>
        )
    }
}

export { downChart, pieChart}