import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Pressures } from '../../models/pressure.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-engine-pressure',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
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
  title: string = 'Pressão Motor (psi) X Tempo';


  constructor(private service: DashboardService) { }

  ngOnInit(): void {

    // 8-03-2024T03:05
    // 11-04-2024T09:35
    // 17-05-2024T15:20
    // 28-06-2024T11:45
    // 5-07-2024T18:10
    // 9-08-2024T07:55
    // 22-09-2024T14:30
    // 3-10-2024T22:25
    // 12-11-2024T10:15
    // 25-12-2024T16:40
    // 8-01-2025T03:05


    this.service.getEnginePressure().subscribe((response: Pressures) => {
      response.forEach((data) => {
        this.xAxis.push(String(data.tempo));
        this.yAxis.push(data.pressao);
      });

      this.chartOption = this.service.initializePressureGraph(this.title, this.xAxis, this.yAxis);
    });

  }
}
