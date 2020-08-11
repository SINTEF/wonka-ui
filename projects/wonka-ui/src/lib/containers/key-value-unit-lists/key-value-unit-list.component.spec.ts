import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueUnitListComponent } from './key-value-unit-list.component';
import { By } from '@angular/platform-browser';
import { KeyValueUnitListItem } from './key-value-unit-list';

describe('KeyValueUnitListComponent', () => {
  let component: KeyValueUnitListComponent;
  let fixture: ComponentFixture<KeyValueUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValueUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {});

  it('should create', () => {
    const listItem = {
      name: 'The header field',
      items: [
        {
          key: 'Key 1',
          value: 'value 1',
          unit: 'unit 1'
        }, {
          key: 'Key 2',
          value: 'value 2',
          unit: 'unit 2'
        }, {
          key: 'Depth',
          value: '100',
          unit: 'meters'
        }
      ]} as KeyValueUnitListItem;
    fixture = TestBed.createComponent(KeyValueUnitListComponent);
    component = fixture.componentInstance;
    component.listItem = listItem;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should provide header and three units in list', () => {
    const listItem = {
      name: 'The header field',
      items: [
        {
          key: 'Key 1',
          value: 'value 1',
          unit: 'unit 1'
        }, {
          key: 'Key 2',
          value: 'value 2',
          unit: 'unit 2'
        }, {
          key: 'Depth',
          value: '100',
          unit: 'meters'
        }
      ]} as KeyValueUnitListItem;
    fixture = TestBed.createComponent(KeyValueUnitListComponent);
    component = fixture.componentInstance;
    component.listItem = listItem;
    fixture.detectChanges();

    const headerCol = fixture.debugElement.query(By.css('.panel-heading')).nativeElement.textContent;
    const key0 = fixture.debugElement.query(By.css('#key-0')).nativeElement.textContent;
    const val0 = fixture.debugElement.query(By.css('#value-0')).nativeElement.textContent;
    const key1 = fixture.debugElement.query(By.css('#key-1')).nativeElement.textContent;
    const val1 = fixture.debugElement.query(By.css('#value-1')).nativeElement.textContent;
    const key2 = fixture.debugElement.query(By.css('#key-2')).nativeElement.textContent;
    const val2 = fixture.debugElement.query(By.css('#value-2')).nativeElement.textContent;

    expect(headerCol).toContain('The header field');
    expect(key0).toContain('Key 1');
    expect(val0).toContain('value 1');
    expect(key1).toContain('Key 2');
    expect(val1).toContain('value 2');
    expect(key2).toContain('Depth');
    expect(val2).toContain('100');
    expect(val2).toContain('meters');
  });

  it('should provide empty header and no units in list', () => {
    const listItem = {
      name: null,
      items: null
    } as KeyValueUnitListItem;

    fixture = TestBed.createComponent(KeyValueUnitListComponent);
    component = fixture.componentInstance;
    component.listItem = listItem;
    fixture.detectChanges();

    const headerCol = fixture.debugElement.query(By.css('.panel-heading')).nativeElement.textContent;
    const key0 = fixture.debugElement.query(By.css('#key-0'));
    const val0 = fixture.debugElement.query(By.css('#value-0'));

    expect(headerCol).toEqual('');
    expect(key0).toBeFalsy();
    expect(val0).toBeFalsy();
  });

});
