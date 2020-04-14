import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableComponent, TableItem } from './table.component';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [
        RouterTestingModule
     ],
     providers: [
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const table = {
      id: 'id',
      tableHeader: 'Table header',
      cols: [
        {columnName: 'x'},
        {columnName: 'y'},
      ],
      data: [
        ['x0', 'y0'],
        ['x1', 'y1'],
        ['x2', 'y2']
      ],
    } as TableItem;
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.table = table;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide header and three rows in table', () => {
    const header = fixture.debugElement.query(By.css('.panel-heading')).nativeElement.textContent;
    const column1 = fixture.debugElement.query(By.css('#th-x')).nativeElement.textContent;
    const column2 = fixture.debugElement.query(By.css('#th-y')).nativeElement.textContent;
    const row0 = fixture.debugElement.query(By.css('#tr-0')).nativeElement.textContent;
    const row1 = fixture.debugElement.query(By.css('#tr-1')).nativeElement.textContent;
    const row2 = fixture.debugElement.query(By.css('#tr-2')).nativeElement.textContent;
    const rowHtmlElements = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rowHtmlElements.length).toBe(3);
    expect(header).toContain('Table header');
    expect(column1).toContain('x');
    expect(column2).toContain('y');
    expect(row0).toContain('x0');
    expect(row0).toContain('y0');
    expect(row1).toContain('x1');
    expect(row1).toContain('y1');
    expect(row2).toContain('x2');
    expect(row2).toContain('y2');
  });

  it('should emit when one row is selected', () => {
    const row = fixture.debugElement.query(By.css('#tr-0')).nativeElement;
    spyOn(component.rowSelected, 'emit');
    row.click();
    expect(component.rowSelected.emit).toHaveBeenCalledWith(['x0', 'y0']);
  });

});
