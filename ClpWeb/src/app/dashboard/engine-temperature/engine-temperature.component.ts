import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Temperatures } from '../../models/temperature.model';


@Component({
  selector: 'app-engine-temperature',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './engine-temperature.component.html',
  styleUrl: './engine-temperature.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class EngineTemperatureComponent implements OnInit {

  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  title: string = 'Temperatura Motor (°C) X Tempo (s)';
  

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getEngineTemperature().subscribe((response: Temperatures) => {
      response.forEach((data) => {
        this.xAxis.push(String(data.tempo));
        this.yAxis.push(data.temperatura);
      });

      this.chartOption = this.service.initializeTemperatureGraph(this.title, this.xAxis, this.yAxis);
    });
    
  }
}
