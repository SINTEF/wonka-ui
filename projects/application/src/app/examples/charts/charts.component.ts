import { Component, OnInit } from '@angular/core';
import { ChartItem, DatasetItem } from '../../../../../wonka-ui/src/lib/charts/chart.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['../css/examples.scss']
})
export class ChartsComponent implements OnInit {

  chart: ChartItem;
  explanation: string;

  constructor() { }

  ngOnInit() {

    /**
     * Adding demo text/code
     */
    this.explanation = `
    <b>Component for showing 2D charts. Based on <a href="https://www.chartjs.org/" target="new">Chart.js</a></b>

    <i><b>Include component in html template:</b></i>
    < lib-chart [chart]="chart"></lib-chart>

    <i><b>Define chart parameter with dataset(s) in ts file:</b></i>
    const dataset = [{
      data: [
        {x: 0, y: 0},
        {x: 1, y: 0.5},
        {x: 2, y: 1},
        {x: 3, y: 1.75},
        {x: 4, y: 3}
      ],
      name: 'Dataset 1',
      label: 'Legend 1',
      pointRadius: '5',
      lineTension: 0
    }, {
      data: [
        {x: 0, y: 0},
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3},
        {x: 4, y: 4},
        {x: 5, y: 5}
      ],
      name: 'Dataset 2',
      label: 'Legend 2',
      pointRadius: '5',
      lineTension: 0
    }] as Dataset[];

    this.chart = {
      title: 'Chart title',
      chartType: 'line',
      xLabel: 'X-label',
      yLabel: 'Y-label',
      xAxesType: 'linear',
      yAxesType: 'linear',
      dataset
    };`;

    /**
     * Building a chart object to send to component
     */
    const dataset = [{
      data: [
        {x: 0, y: 0},
        {x: 1, y: 0.5},
        {x: 2, y: 1},
        {x: 3, y: 1.75},
        {x: 4, y: 3}
      ],
      name: 'Dataset 1',
      label: 'Legend 1',
      pointRadius: '5',
      lineTension: 0
    }, {
      data: [
        {x: 0, y: 0},
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3},
        {x: 4, y: 4},
        {x: 5, y: 5}
      ],
      name: 'Dataset 2',
      label: 'Legend 2',
      pointRadius: '5',
      lineTension: 0
    }] as DatasetItem[];

    this.chart = {
      title: 'Chart title',
      chartType: 'line',
      xLabel: 'X-label',
      yLabel: 'Y-label',
      xAxesType: 'linear',
      yAxesType: 'linear',
      dataset
    } as ChartItem;
    console.log('chart example:', this.chart);
  }

}
