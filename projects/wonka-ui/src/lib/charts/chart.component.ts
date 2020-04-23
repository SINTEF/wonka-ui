import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ChartDataSets, ChartPoint, } from 'chart.js';

export interface PointItem {
  x: number;
  y: number;
}

export interface DatasetItem {
  data: Array<PointItem>;
  name: string;
  label: string;
  pointRadius: string;
  chartLabels: Array<string>;
  lineTension: number;
}

export interface ChartItem {
  title: string;
  chartType: string;
  xLabel: string;
  yLabel: string;
  xAxesType: string;
  yAxesType: string;
  dataset: Array<DatasetItem>;
  colors?: [
      {
          backgroundColor: string;
          borderColor: string;
          pointBackgroundColor: string;
          pointBorderColor: string;
          pointHoverBackgroundColor: string;
          pointHoverBorderColor: string;
      }
  ];
}

/**
 * Provides a chart
 */
@Component({
  selector: 'lib-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  @Input() chart: ChartItem;
  @Input() class: string;

  public chartType: string;
  public datasets: ChartDataSets[];
  public chartOptions = {
    responsive: true,
    scales: {
      yAxes: [],
      xAxes: []
    },
    title: {
      display: false,
      text: ''
    },
  };

  chartColors = [
    {
      backgroundColor: 'rgba(103, 158, 183, .1)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
  ];

  constructor() { }


  ngOnInit() {
    if (!this.class) {
      this.class = '';
    }
    this.chartType = this.chart.chartType;
    this.chartOptions.title.text =  this.chart.title;
    if (this.chart.colors) {
      this.chartColors = this.chart.colors;
    }
    this.datasets = [];
    this.chartOptions.scales.xAxes.push({
      scaleLabel: {
         display: this.chart.xLabel ? true : false,
         labelString: this.chart.xLabel ? this.chart.xLabel : '',
      },
      type: this.chart.xAxesType
    });
    this.chartOptions.scales.yAxes.push({
      scaleLabel: {
         display: this.chart.yLabel ? true : false,
         labelString: this.chart.yLabel ? this.chart.yLabel : '',
      },
      type: this.chart.yAxesType
    });

    this.chart.dataset.forEach((data, index) => {
      this.datasets.push(
        {
          data: data.data as ChartPoint[],
          label: data.label,
          lineTension: data.lineTension
        }
      );
    });
  }

}
