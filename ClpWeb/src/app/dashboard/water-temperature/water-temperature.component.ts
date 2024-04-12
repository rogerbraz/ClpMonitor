import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Temperatures } from '../../models/temperature.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-water-tempeture',
  standalone: true,
  imports: [ CommonModule, NgxEchartsDirective ],
  templateUrl: './water-temperature.component.html',
  styleUrl: './water-temperature.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class WaterTemperatureComponent implements OnInit {

  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  title: string = 'Temperatura Água (°C) X Tempo';
  

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getWaterTemperature().subscribe((response: Temperatures) => {
      response.forEach((data) => {
        this.xAxis.push(String(data.tempo));
        this.yAxis.push(data.temperatura);
      });

      this.chartOption = this.service.initializeTemperatureGraph(this.title, this.xAxis, this.yAxis);
    });
    
  }
}
