import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Pressures } from '../../models/pressure.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-water-pressure-lt',
  standalone: true,
  imports: [ CommonModule, NgxEchartsDirective ],
  templateUrl: './water-pressure-lt.component.html',
  styleUrl: './water-pressure-lt.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class WaterPressureLtComponent implements OnInit {

  chartOption: EChartsOption = {};
  xAxis: string[] = [];
  yAxis: number[] = [];
  title: string = 'Pressão Água (psi) X Tempo';


  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.chartOption = this.service.initializeGaugeGraph();
  }

}

