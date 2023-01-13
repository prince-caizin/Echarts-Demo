import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // data-echart-responsive="true"
    var chartDom = document.getElementById('main') as any;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'item',
        // axisPointer: { type: 'cross' }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','A','B','C','D','E','F','G','H','I','J'],
        axisLabel: {

          width: 30,
          ellipsis: '...',
          overflow: 'truncate'
        }
      },
      grid: {},
      yAxis : [
        {
          type : 'value',
          name: 'Y-Axis',
          nameLocation: 'middle',
          // nameGap: 50,
          scale:true
        }
      ],

      dataZoom:[ {
        type: 'inside',
        id: 'insideX',
        xAxisIndex: 0,
        start: 0,
        end: 50,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true
      }],
      series: [
        {
          data: [10,20,30,40,25,15,17,150, 230, 224, 218, 135, 147, 260,200,300,150],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  }

}
