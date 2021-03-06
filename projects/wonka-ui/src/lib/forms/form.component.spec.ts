import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';
import { FormButton, FormFieldItem, FormItem } from './form';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.form = {
      name: 'Example form',
      description: 'This is the description of the form.',
      confirmation: 'This is the confirmation on form submit.',
      buttons: [
        {
          id: '1',
          label: 'Button 1',
          class: 'test-button'
        }
      ] as FormButton[],
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          type: 'string',
          info: 'Required field, no restrictions'
        }, {
          label: 'Depth',
          name: 'depth',
          required: false,
          type: 'number',
          units: 'mm/sec',
          min: 0,
          expression: '^[\+\-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$',
          info: 'Optional field, numeric, min value zero'
        }, {
          label: 'Size',
          name: 'size',
          required: true,
          type: 'number',
          units: 'mm',
          max: 100,
          expression: '^[\+\-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$',
          info: 'Required field, numeric, max value 100'
        }, {
          label: 'Temperature',
          name: 'temperature',
          required: true,
          type: 'number',
          units: 'degree celcius',
          min: -100,
          max: 100,
          expression: '^[\+\-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$',
          info: 'Required field, value between -100 and 100'
        }, {
          label: 'Direction',
          name: 'direction',
          required: true,
          type: 'radio',
          options: ['North', 'South', 'East', 'West'],
          info: 'Radio button group'
        }
      ] as FormFieldItem[]
    } as FormItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    const name = component.sintefForm.controls.name;
    const depth = component.sintefForm.controls.depth;
    const size = component.sintefForm.controls.size;
    const temperature = component.sintefForm.controls.temperature;
    const direction = component.sintefForm.controls.direction;

    expect(name.valid).toBeFalsy();
    expect(depth.valid).toBeTruthy();
    expect(size.valid).toBeFalsy();
    expect(temperature.valid).toBeFalsy();
    expect(direction.valid).toBeFalsy();
    expect(component.sintefForm.valid).toBeFalsy();
  });

  it('should be valid when fields set', () => {
    const name = component.sintefForm.controls.name;
    const depth = component.sintefForm.controls.depth;
    const size = component.sintefForm.controls.size;
    const temperature = component.sintefForm.controls.temperature;
    const direction = component.sintefForm.controls.direction;

    name.setValue('Field name');
    depth.setValue(100);
    size.setValue(5);
    temperature.setValue(-25);
    direction.setValue('West');

    expect(name.valid).toBeTruthy();
    expect(depth.valid).toBeTruthy();
    expect(size.valid).toBeTruthy();
    expect(temperature.valid).toBeTruthy();
    expect(direction.valid).toBeTruthy();
    expect(component.sintefForm.valid).toBeTruthy();
  });

  it('should be invalid if invalid input', () => {
    const name = component.sintefForm.controls.name;
    const depth = component.sintefForm.controls.depth;
    const size = component.sintefForm.controls.size;
    const temperature = component.sintefForm.controls.temperature;
    const direction = component.sintefForm.controls.direction;

    name.setValue(10);
    depth.setValue('text');
    size.setValue(500);
    temperature.setValue(-110);
    direction.setValue(null);

    expect(name.valid).toBeTruthy();
    expect(depth.valid).toBeFalsy();
    expect(size.valid).toBeFalsy();
    expect(temperature.valid).toBeFalsy();
    expect(direction.valid).toBeFalsy();
    expect(component.sintefForm.valid).toBeFalsy();
  });

  it('should emit when the form is submitted', () => {
    const name = component.sintefForm.controls.name;
    const depth = component.sintefForm.controls.depth;
    const size = component.sintefForm.controls.size;
    const temperature = component.sintefForm.controls.temperature;
    const direction = component.sintefForm.controls.direction;

    name.setValue('Field name');
    depth.setValue(100);
    size.setValue(5);
    temperature.setValue(-25);
    direction.setValue('West');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    expect(component.submitted).toBe(true);

    spyOn(component.formSubmitted, 'emit');
    component.onSubmit();
    expect(component.formSubmitted.emit).toHaveBeenCalledWith(component.sintefForm);
  });

  it('should emit when button is clicked', () => {

    const button = fixture.debugElement.query(By.css('.test-button')).nativeElement;
    spyOn(component.buttonClicked, 'emit');
    button.click();
    expect(component.buttonClicked.emit).toHaveBeenCalledWith('1');
  });

  it('should emit when field value is changed', () => {
    const spy = spyOn(component.fieldValueChanged, 'emit');
    component.sintefForm.controls.name.setValue('name');

    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
