import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent, ListItem } from './list.component';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const items: ListItem[] = [{
      id: '1',
      name: 'Asset 1',
      path: 'path 1',
      description: 'description 1',
      header: 'header 1'
    }, {
      id: '2',
      name: 'Asset 2',
      path: 'path 2',
      description: 'description 2',
      header: 'header 2'
    }
  ];

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.items = items;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide two assets in list', () => {
    const row1 = fixture.debugElement.query(By.css('#_1')).nativeElement.textContent;
    const row2 = fixture.debugElement.query(By.css('#_2')).nativeElement.textContent;
    expect(row1).toContain('Asset 1');
    expect(row2).toContain('Asset 2');
  });

  it('should emit when one item is selected', () => {
    const row1 = fixture.debugElement.query(By.css('#_2')).nativeElement;
    spyOn(component.itemSelected, 'emit');
    row1.click();
    expect(component.itemSelected.emit).toHaveBeenCalledWith({
      id: '2',
      name: 'Asset 2',
      path: 'path 2',
      description: 'description 2',
      header: 'header 2'
    });
  });

});
