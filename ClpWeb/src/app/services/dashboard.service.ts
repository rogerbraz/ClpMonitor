import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EChartsOption } from 'echarts';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';
import { Pressures } from '../models/pressure.model';
import { Temperatures } from '../models/temperature.model';
import { Levels } from '../models/level.model';
import { Filters } from '../models/filter.model';

const API_DATA = environment.apiDataUrl;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private urlPressaoMotor = `${API_DATA}/pressao-motor/`;
  private urlPressaoAgua = `${API_DATA}/pressao-agua/`;
  private urlTemperaturaMotor = `${API_DATA}/temperatura-motor/`;
  private urlTemperaturaAgua = `${API_DATA}/temperatura-agua/`;
  private urlNivelOleo = `${API_DATA}/nivel-oleo/`;
  private urlFiltroLubrificante = `${API_DATA}/filtro-lubrificante/`;

  chartOption: EChartsOption = {};

  constructor(
    private http: HttpClient,

  ) { }

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

  getOilLevel(): Observable<Levels> {
    return this.http.get<Levels>(this.urlNivelOleo);
  }

  getFilterInfo(): Observable<Filters> {
    return this.http.get<Filters>(this.urlFiltroLubrificante);
  }

  initializePressureGraph(title: string, xAxisData: string[], yAxisData: number[]): EChartsOption {
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

  initializeTemperatureGraph(title: string, xAxisData: string[], yAxisData: number[]): EChartsOption {
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
      yAxis: {},
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

  initializeLevelGraph(title: string, xAxisData: string[], yAxisData: number[]): EChartsOption {
    return this.chartOption = {
      dataset: [
        {
          dimensions: ['name', 'age', 'profession', 'score', 'date'],
          source: [
            ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
            ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
            ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
            ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
            ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
            ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
            ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
            ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
            ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
          ]
        },
        {
          transform: {
            type: 'sort',
            config: { dimension: 'score', order: 'desc' }
          }
        }
      ],
      xAxis: {
        type: 'category',
        axisLabel: { interval: 0, rotate: 30 },
        data: xAxisData
      },
      yAxis: {},
      series: {
        type: 'bar',
        data: yAxisData,
      }
    };
  }

  initializeFilterGraph(filterInfo: Filters): EChartsOption {
    return this.chartOption = {
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [10.3, 1000, 'Segunda-feira'],
          [20.1, 2000, 'Terça-feira'],
          [30.4, 3000, 'Quarta-feira'],
          [39.1, 4000, 'Quinta-feira'],
          [40.7, 5000, 'Sexta-feira'],
          [68.1, 6000, 'Sábado'],
          [85.6, 7000, 'Domingo']
        ]
      },
      grid: { containLabel: true },
      xAxis: { name: '' },
      yAxis: { type: 'category' },
      visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
          color: ['#65B581', '#FFCE34', '#FD665F']
        }
      },
      series: [
        {
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
          }
        }
      ]
    };
  }

  initializeGaugeGraph(): EChartsOption {
    return this.chartOption = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          progress: {
            show: true
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}'
          },
          data: [
            {
              value: 50,
              name: 'SCORE'
            }
          ]
        }
      ]
    };
  }

}
