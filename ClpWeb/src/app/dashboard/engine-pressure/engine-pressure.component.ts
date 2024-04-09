import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Pressures } from '../../models/pressure.model';


@Component({
  selector: 'app-engine-pressure',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './engine-pressure.component.html',
  styleUrl: './engine-pressure.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class EnginePressureComponent implements OnInit {

  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  title: string = 'Pressão Motor (psi) X Tempo (s)';


  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getEnginePressure().subscribe((response: Pressures) => {
      response.forEach((data) => {
        this.xAxis.push(String(data.tempo));
        this.yAxis.push(data.pressao);
      });

      this.chartOption = this.service.initializePressureGraph(this.xAxis, this.yAxis, this.title);
    });

  }
}
