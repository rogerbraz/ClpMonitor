import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EChartsOption } from 'echarts';
import { Pressures } from '../models/pressure';
import { Temperatures } from '../models/temperature';

const API_DATA = environment.apiDataUrl;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private urlPressaoMotor = `${API_DATA}/pressao-motor/`;
  private urlPressaoAgua = `${API_DATA}/pressao-agua/`;
  private urlTemperaturaMotor = `${API_DATA}/temperatura-motor/`;
  private urlTemperaturaAgua = `${API_DATA}/temperatura-agua/`;

  chartOption: EChartsOption = {};

  constructor(private http: HttpClient) { }

  getEnginePressure(): Observable<Pressures> {
    return this.http.get<Pressures>(this.urlPressaoMotor);
  }

  getWaterPressure(): Observable<Pressures> {
    return this.http.get<Pressures>(this.urlPressaoAgua);
  }

  getEngineTemperature(): Observable<Temperatures> {
    return this.http.get<Temperatures>(this.urlTemperaturaMotor);
  }

  getWaterTemperature(): Observable<Temperatures> {
    return this.http.get<Temperatures>(this.urlTemperaturaAgua);
  }

  initializePressureGraph(xAxisData: string[], yAxisData: number[], title: string): EChartsOption {
    return this.chartOption = {
      title: {
        text: title
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
        data: xAxisData
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} psi'
        }
      },
      series: [
        {
          name: 'Highest',
          type: 'line',
          data: yAxisData,
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

  initializeTemperatureGraph(xAxisData: string[], yAxisData: number[], title: string): EChartsOption {
    return this.chartOption = {
      title: {
        text: title,
        left: '1%'
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      xAxis: {
        data: xAxisData.map(function (item) {
          return item;
        })
      },
      yAxis: { },
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap: {
        top: 50,
        right: 10,
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#93CE07'
          },
          {
            gt: 50,
            lte: 100,
            color: '#FBDB0F'
          },
          {
            gt: 100,
            lte: 150,
            color: '#FC7D02'
          },
          {
            gt: 150,
            lte: 200,
            color: '#FD0100'
          },
          {
            gt: 200,
            lte: 300,
            color: '#AA069F'
          },
          {
            gt: 300,
            color: '#AC3B2A'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      },
      series: {
        name: title,
        type: 'line',
        data: yAxisData,
        markLine: {
          silent: true,
          lineStyle: {
            color: '#333'
          },
          data: [
            {
              yAxis: 50
            },
            {
              yAxis: 100
            },
            {
              yAxis: 150
            },
            {
              yAxis: 200
            },
            {
              yAxis: 300
            }
          ]
        }
      }
    };
  }

}
