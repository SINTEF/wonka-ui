import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';
import { By } from '@angular/platform-browser';
import { ChartDataSets } from 'chart.js';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartComponent,
      ],
      imports: [
        ChartsModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should provide line chart object', () => {
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

    const lineChart = {
      chartDataSets: lineChartDataSets,
      chartLabels: lineChartLabels
    };

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    component.header = 'Chart title';
    component.id = 'chart-1';
    component.lineChartItem = lineChart;
    fixture.detectChanges();

    const canvas = window.document.getElementsByTagName('canvas')[0];
    const type = canvas.getAttribute('ng-reflect-chart-type');
    expect(type).toBe('line');
  });

  it('should provide pie chart object', () => {
    const pieChartDataSets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
    const pieChartLabels = [
          'Part 1', 'Part 2', 'Part 3', 'Part 4',
          'Part 5', 'Part 6', 'Part 7', 'Part 8',
          'Part 9', 'Part 10', 'Part 11', 'Part 12'];

    const pieChart = {
      chartData: pieChartDataSets,
      chartLabels: pieChartLabels
    };

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    component.header = 'Chart title';
    component.id = 'chart-1';
    component.pieChartItem = pieChart;
    fixture.detectChanges();

    const canvas = window.document.getElementsByTagName('canvas')[0];
    const type = canvas.getAttribute('ng-reflect-chart-type');
    expect(type).toBe('pie');
  });

  it('should provide scatter chart object', () => {
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
    const scatterChart = {
      chartData: scatterChartData
    };

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    component.header = 'Chart title';
    component.id = 'chart-1';
    component.scatterChartItem = scatterChart;
    fixture.detectChanges();

    const canvas = window.document.getElementsByTagName('canvas')[0];
    const type = canvas.getAttribute('ng-reflect-chart-type');
    expect(type).toBe('scatter');
  });

  it('should provide header when declared', () => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    component.header = 'Chart title';
    fixture.detectChanges();
    const heading = fixture.debugElement.query(By.css('.panel-heading')).nativeElement.textContent;
    expect(heading).toContain('Chart title');
  });

});
