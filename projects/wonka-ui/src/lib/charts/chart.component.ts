import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { LineChartItem, PieChartItem, ScatterChartItem } from './chart';

/**
 * Provides a chart
 */
@Component({
  selector: 'lib-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  @Input() lineChartItem?: LineChartItem;
  @Input() pieChartItem?: PieChartItem;
  @Input() scatterChartItem?: ScatterChartItem;
  @Input() header?: string;
  @Input() id?: string;
  @Input() class?: string;
  @Input() baseColors: number[][];

  pieChartLabels: Label[];
  pieChartData: number[];
  pieChartType: ChartType;
  pieChartLegend: boolean;
  pieChartColors: { backgroundColor: string[]; }[];
  pieChartOptions: ChartOptions;

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: (ChartOptions & { annotation: any });
  lineChartColors: Color[];
  lineChartLegend: boolean;
  lineChartType: string;

  scatterChartData: ChartDataSets[];
  scatterChartOptions: ChartOptions;
  scatterChartColors: { backgroundColor: string[]; }[];
  scatterChartType: ChartType;

  constructor() { }


  ngOnInit() {
    if (!this.baseColors) {
      this.baseColors = [[0, 60, 101], [34, 167, 229], [164, 194, 31], [245, 211, 15], [255, 130, 26], [242, 51, 24]];
    }

    if (!this.class) {
      this.class = '';
    }

    if (this.pieChartItem) {
      this.createPieChart();
    }
    if (this.lineChartItem) {
      this.createLineChart();
    }
    if (this.scatterChartItem) {
      this.createScatterChart();
    }
  }

  private createLineChart() {
    this.lineChartData = this.lineChartItem.chartDataSets;
    this.lineChartLabels = this.lineChartItem.chartLabels;
    this.lineChartOptions = {
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{}],
        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',
          }
        ]
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              enabled: true,
              fontColor: 'orange',
              content: 'LineAnno'
            }
          },
        ],
      },
    };
    this.lineChartLegend = true;
    this.lineChartType = 'line';
    this.lineChartColors = this.createLineChartColor(this.lineChartItem.chartDataSets.length);
  }

  private createPieChart() {
    this.pieChartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
        },
      }
    };
    this.pieChartLabels = this.pieChartItem.chartLabels;
    this.pieChartData = this.pieChartItem.chartData;
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
    if (this.pieChartData.length < (this.baseColors.length * 6) + 1) {
      this.pieChartColors = [
        {
          backgroundColor: this.createPieChartColor(this.pieChartData.length)
        },
      ];
    }
  }

  createScatterChart() {
    this.scatterChartOptions = {
      responsive: true,
    };
    this.scatterChartData = this.scatterChartItem.chartData;
    this.scatterChartType = 'scatter';
  }


  private createLineChartColor(lineCount: number): Color[] {
    const colors = [];
    let u = 0;
    for (let i = 0; i < lineCount; i++) {
      colors.push({
        backgroundColor: this.createColor(u, 0.0),
        borderColor: this.createColor(u, 1),
        pointBackgroundColor: this.createColor(u, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: this.createColor(u, 1),
        pointHoverBorderColor: this.createColor(u, 0.8)
      });
      u = (u === this.baseColors.length - 1) ? 0 : u + 1;
    }
    return colors;
  }

  private createPieChartColor(pieCount): string[] {
    const colors = [];
    let opacity = 1.0;
    let u = 0;

    const numOfSteps = Math.floor(pieCount / 6);
    let mod = pieCount % 6;
    for (let i = 0; i < pieCount; i++) {
      let step = numOfSteps;
      if (mod > 0) {
        step = numOfSteps + 1;
      }
      const stepSize = 1 / step;
      colors.push(this.createColor(u, opacity));
      opacity = opacity - (stepSize);
      if (opacity <= 0) {
        mod = mod - 1;
        opacity = 1;
        u = (u === this.baseColors.length - 1) ? 0 : u + 1;
      }
      if (opacity < 0.1) {
        opacity = 0.15;
      }
    }
    return colors;
  }

  private createColor(index: number, opacity: number): string {
    return 'rgba(' +
      this.baseColors[index][0].toString() + ',' +
      this.baseColors[index][1].toString() + ',' +
      this.baseColors[index][2].toString() + ',' +
      opacity.toString() + ')';
  }

  chartHovered(event) {
  }

  chartClicked(event) {
  }

}
