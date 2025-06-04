import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.scss']
})
export class AguaComponent {
  // Chart configuration
  public chartLabels: string[] = ['Water Intake'];
  public chartData: any[] = [
    { data: [2100], label: 'Daily Target (ml)' }
  ];
  public chartOptions: any = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 3000,
        title: {
          display: true,
          text: 'Milliliters (ml)'
        }
      }
    }
  };
  chartType: ChartType = 'bar';
  public showLegend: boolean = true;
}