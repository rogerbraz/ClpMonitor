import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { Levels } from '../../models/level.model';
import { Filters } from '../../models/filter.model';

@Component({
  selector: 'app-lubricating-filter',
  standalone: true,
  imports: [ CommonModule, NgxEchartsDirective ],
  templateUrl: './lubricating-filter.component.html',
  styleUrl: './lubricating-filter.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class LubricatingFilterComponent implements OnInit {

  initOpts = {
    renderer: 'svg',
    width: 800,
    height: 600,
  };

  chartOption: EChartsOption = {};
  filtroInfo: Filters = [];
  

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getFilterInfo().subscribe((response: Filters) => {
      response.forEach((data) => {
        this.filtroInfo.push(data);
      });

      this.chartOption = this.service.initializeFilterGraph(this.filtroInfo);
    });
    
  }
}
