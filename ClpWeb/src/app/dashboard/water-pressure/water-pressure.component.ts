import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Pressures } from '../../models/pressure.model';


@Component({
  selector: 'app-water-pressure',
  standalone: true,
  imports: [ NgxEchartsDirective ],
  templateUrl: './water-pressure.component.html',
  styleUrl: './water-pressure.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class WaterPressureComponent implements OnInit {

  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  title: string = 'Pressão Água (psi) X Tempo (s)';


  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getWaterPressure().subscribe((response: Pressures) => {
      response.forEach((data) => {
        this.xAxis.push(String(data.tempo));
        this.yAxis.push(data.pressao);
      });

      this.chartOption = this.service.initializePressureGraph(this.title, this.xAxis, this.yAxis);
    });

  }
}

