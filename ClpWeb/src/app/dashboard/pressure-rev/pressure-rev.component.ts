import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { Levels } from '../../models/level.model';

@Component({
  selector: 'app-pressure-rev',
  standalone: true,
  imports: [ CommonModule, NgxEchartsDirective ],
  templateUrl: './pressure-rev.component.html',
  styleUrl: './pressure-rev.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class PressureRevComponent implements OnInit {

  initOpts = {
    renderer: 'svg',
    width: 800,
    height: 600,
  };

  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  title: string = 'Pressão Rev';
  

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getOilLevel().subscribe((response: Levels) => {
      response.forEach((data) => {
        this.xAxis.push(String(data.tempo));
        this.yAxis.push(data.nivel);
      });

      this.chartOption = this.service.initializeLevelGraph(this.title, this.xAxis, this.yAxis);
    });
    
  }
}
