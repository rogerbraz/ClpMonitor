import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Pressures } from '../../models/pressure.model';
import { CommonModule } from '@angular/common';
import { Levels } from '../../models/level.model';

@Component({
  selector: 'app-oil-level',
  standalone: true,
  imports: [ CommonModule, NgxEchartsDirective ],
  templateUrl: './oil-level.component.html',
  styleUrl: './oil-level.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class OilLevelComponent implements OnInit {

  initOpts = {
    renderer: 'svg',
    width: 800,
    height: 600,
  };

  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  title: string = 'Nível do Óleo (cm) X Tempo (h)';
  

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
