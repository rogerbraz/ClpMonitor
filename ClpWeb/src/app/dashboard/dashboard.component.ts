import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
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
  
  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    // this.service.getEnginePressure().subscribe((response: any[]) => {
    //   response.forEach((data: { tempo: any; pressao: number; }) => {
    //     this.xAxis.push(String(data.tempo));
    //     this.yAxis.push(data.pressao);
    //   });

    //   this.chartOption = this.service.initializeEnginePressureGraph(this.xAxis, this.yAxis);
    // });
    
  }
  
}