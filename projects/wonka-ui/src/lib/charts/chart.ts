import { ChartDataSets } from 'chart.js';

export interface PointItem {
    x: number;
    y: number;
}

export interface LineChartItem {
    chartDataSets: ChartDataSets[];
    chartLabels: string[];
}

export interface LineChartData {
    data: number[];
    label: string;
    lineTension: number;
}
export interface PieChartItem {
    chartData: number[];
    chartLabels: string[];
}

export interface ScatterChartItem {
    chartData: ChartDataSets[];
}
