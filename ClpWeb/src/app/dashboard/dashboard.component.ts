import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EnginePressures } from '../models/engine-pressure';
import { DashboardService } from '../services/dashboard.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class DashboardComponent implements OnInit {
  
  data$: EnginePressures = [];
  tempo: string[] = [];
  pressao: number[] = [];
  

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getEnginePressure().subscribe( response => {
      response.forEach(data => {
        this.tempo.push(String(data.tempo));
        this.pressao.push(data.pressao);
      });
   });

  }

   
  chartOption: EChartsOption = {
     title: {
       text: 'Temperature Change in the Coming Week'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.tempo
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: [
        {
          name: 'Highest',
          type: 'line',
          data: this.pressao,
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        }
      ]
  };
  
  
}