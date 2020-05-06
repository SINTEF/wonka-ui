import { Component, OnInit } from '@angular/core';
import { LineChartItem, PieChartItem, ScatterChartItem } from '../../../../../wonka-ui/src/lib/charts/chart.component';
import { ChartDataSets } from '../../../../../wonka-ui/node_modules/@types/chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['../css/examples.scss']
})
export class ChartsComponent implements OnInit {

  lineChart: LineChartItem;
  pieChart: PieChartItem;
  scatterChart: ScatterChartItem;
  lineChartExplanation: string;
  pieChartExplanation: string;
  scatterChartExplanation: string;

  constructor() { }

  ngOnInit() {

    this.lineChartExplanation = `
    <b>Show 2D line charts. Based on <a href="https://www.chartjs.org/" target="new">Chart.js</a></b>

    <i><b>Include component in html template:</b></i>
    < lib-chart
        [lineChartItem]="lineChart"
        [id]="'line-1'"
        [class]="'style-class'"
        [header]="'Line chart example'"></lib-chart>

    <i><b>Define chart parameter with dataset(s) in ts file:</b></i>
    const lineChartDataSets = [{
      data: [101, 104, 120, 145, 172, 191, 192],
      label: 'Series A', lineTension: 0
    }, {
      data: [91, 101, 99, 95, 85, 74, 73],
      label: 'Series B', lineTension: 0
    }, {
      data: [22, 24, 27, 32, 40, 55, 73],
      label: 'Series C', lineTension: 0
    }, {
      data: [13, 15, 18, 22, 27, 32, 37],
      label: 'Series D', lineTension: 0
    }, {
      data: [137, 92, 57, 29, 18, 15, 13],
      label: 'Series E', lineTension: 0
    }, {
      data: [150, 140, 130, 120, 110, 100, 90],
      label: 'Series F', lineTension: 0
    }] as ChartDataSets[];

    const lineChartLabels =
      ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    `;

    const lineChartDataSets = [{
      data: [101, 104, 120, 145, 172, 191, 192],
      label: 'Series A', lineTension: 0
    }, {
      data: [91, 101, 99, 95, 85, 74, 73],
      label: 'Series B', lineTension: 0
    }, {
      data: [22, 24, 27, 32, 40, 55, 73],
      label: 'Series C', lineTension: 0
    }, {
      data: [13, 15, 18, 22, 27, 32, 37],
      label: 'Series D', lineTension: 0
    }, {
      data: [137, 92, 57, 29, 18, 15, 13],
      label: 'Series E', lineTension: 0
    }, {
      data: [150, 140, 130, 120, 110, 100, 90],
      label: 'Series F', lineTension: 0
    }] as ChartDataSets[];

    const lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    this.lineChart = {
      chartDataSets: lineChartDataSets,
      chartLabels: lineChartLabels
    };

    this.pieChartExplanation = `
    <b>Show 2D pie charts. Based on <a href="https://www.chartjs.org/" target="new">Chart.js</a></b>

    <i><b>Include component in html template:</b></i>
    < lib-chart
        [pieChartItem]="pieChart"
        [id]="'pie-1'"
        [class]="'style-class'">
    </lib-chart>

    <i><b>Define chart parameter with dataset(s) in ts file:</b></i>
    const pieChartDataSets = [105, 100, 95, 90, 85, 80, 75, 70, 65];
    const pieChartLabels = [
          'Part 1', 'Part 2', 'Part 3', 'Part 4',
          'Part 5', 'Part 6', 'Part 7', 'Part 8',
          'Part 9'];

    this.pieChart = {
      chartData: pieChartDataSets,
      chartLabels: pieChartLabels
    };`;
    const pieChartDataSets = [105, 100, 95, 90, 85, 80, 75, 70, 65];
    const pieChartLabels = [
          'Part 1', 'Part 2', 'Part 3', 'Part 4',
          'Part 5', 'Part 6', 'Part 7', 'Part 8',
          'Part 9'];

    this.pieChart = {
      chartData: pieChartDataSets,
      chartLabels: pieChartLabels
    };

    this.scatterChartExplanation = `
    <b>Show 2D scatter charts. Based on <a href="https://www.chartjs.org/" target="new">Chart.js</a></b>

    <i><b>Include component in html template:</b></i>
    < lib-chart [scatterChartItem]="scatterChart" [class]="'style-class'"></lib-chart>

    <i><b>Define chart parameter with dataset(s) in ts file:</b></i>
    const scatterChartData = [
      {
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: -2 },
          { x: 4, y: 4 },
          { x: 4, y: 4.3 },
          { x: 4, y: 4.6 },
          { x: 4.2, y: 4.1 },
          { x: 4.4, y: 3.8 },
          { x: 5, y: 3.7 },
          { x: 6, y: 1.5 },
          { x: 7, y: 3 },
          { x: 8, y: -2 },
          { x: 9, y: 4 },
          { x: 10, y: -3 },
        ],
        label: 'Series A',
        pointRadius: 5,
      },

    ];
    this.scatterChart = {
      chartData: scatterChartData
    };`;
    const scatterChartData = [
      {
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: -2 },
          { x: 4, y: 4 },
          { x: 4, y: 4.3 },
          { x: 4, y: 4.6 },
          { x: 4.2, y: 4.1 },
          { x: 4.4, y: 3.8 },
          { x: 5, y: 3.7 },
          { x: 6, y: 1.5 },
          { x: 7, y: 3 },
          { x: 8, y: -2 },
          { x: 9, y: 4 },
          { x: 10, y: -3 },
        ],
        label: 'Series A',
        pointRadius: 5,
      },

    ];
    this.scatterChart = {
      chartData: scatterChartData
    };

  }

}
