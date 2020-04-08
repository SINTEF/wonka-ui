import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent, DatasetItem } from './chart.component';
import { ChartsModule } from 'ng2-charts';
import { By } from '@angular/platform-browser';

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

  beforeEach(() => {
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

    const chart = {
      title: 'Chart title',
      chartType: 'line',
      xLabel: 'X-label',
      yLabel: 'Y-label',
      xAxesType: 'linear',
      yAxesType: 'linear',
      dataset
    };
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    component.chart = chart;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide graph object', () => {
    const heading = fixture.debugElement.query(By.css('.panel-heading')).nativeElement.textContent;
    expect(heading).toContain('Chart title');
  });

});
