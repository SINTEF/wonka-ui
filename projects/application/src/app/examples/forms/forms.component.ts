import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldItem, FormItem, FormButton } from '../../../../../wonka-ui/src/lib/forms/form';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['../css/examples.scss']
})
export class FormsComponent implements OnInit {

  explanation1: string;
  explanation2: string;

  showConfirmation = false;
  showAbortButton = false;

  form1: FormItem;
  form2: FormItem;

  constructor() { }

  ngOnInit() {
    this.form1 = this.createMinimumForm();
    this.form2 = this.createFullForm();

    /**
     * Adding demo text/code
     */
    this.explanation1 = `
    <b>Component for showing generic input form.</b>

    <i><b>Include component in html template:</b></i>
    < lib-form
        [form]="form1"
        [class]="'style-class'"
        (formSubmitted)="onSubmit($event)"
        (formAborted)="onAbortForm()"></lib-form>

    <i><b>Define onSubmit function in ts file:</b></i>
    onSubmit(formGroup: FormGroup) {
      const values = [];
      Object.keys(formGroup.controls).forEach(key => {
        values.push(key + ': ' + formGroup.controls[key].value);
      });
      alert('Form submitted: ' + JSON.stringify(values, null, 2));
    }

    <i><b>Define variables and form fields in ts file:</b></i>
    {
      name: 'Example form with minimum input ',
      fields: [
        {
          label: 'Main category',
          name: 'simpleCategory',
          type: 'select',
          options: ['Category 1'],
        }, {
          label: 'Name',
          name: 'simpleName',
        }
      ] as FormFieldItem[]
    } as FormItem;
  `;

    this.explanation2 = `
    <b>Component for showing generic input form.</b>

    <i><b>Include component in html template:</b></i>
    < lib-form
        [form]="form"
        [class]="'style-class'"
        [showConfirmation]="showConfirmation"
        [showAbortButton]="showAbortButton"
        (formSubmitted)="onSubmit($event)"
        (formAborted)="onAbortForm()"></lib-form>

    <i><b>Define onSubmit function in ts file:</b></i>
    onSubmit(formGroup: FormGroup) {
      const values = [];
      Object.keys(formGroup.controls).forEach(key => {
        values.push(key + ': ' + formGroup.controls[key].value);
      });
      alert('Form submitted: ' + JSON.stringify(values, null, 2));
      this.showConfirmation = true;
    }

    <i><b>Define onButtonClicked function in ts file:</b></i>
    onButtonClicked(id: string) {
      alert('Button clicked: ' + id);
    }

    <i><b>Define variables and form fields in ts file:</b></i>
    {
      showConfirmation = true;
      showAbortButton = true;
      name: 'Example form with all properties and fields set',
      description: 'This is the description of the form.',
      confirmation: 'This is the confirmation on form submit.',
      submitText: 'Submit form',
      resetText: 'Reset form',
      buttons: [
        {
          id: '1',
          label: 'Button 1',
          class: 'is-primary'
        }, {
          id: '2',
          label: 'Button 2',
          class: 'is-warning'
        }, {
          id: '3',
          label: 'Button 3'
        }
      ] as FormButton[],
      fields: [
        {
          label: 'Main category',
          name: 'categoryAddNew',
          required: true,
          type: 'select',
          options: ['Category 1', 'Category 2', 'Category 3'],
          canCreate: true,
          wide: true,
          info: 'Required field, list of objects, can create new'
        }, {
          label: 'Category',
          name: 'category',
          required: true,
          type: 'select',
          options: ['Category 4', 'Category 5', 'Category 6'],
          canCreate: false,
          info: 'Required field, list of objects, can not create new'
        }, {
          label: 'Name',
          name: 'name',
          required: true,
          type: 'string',
          wide: true,
          info: 'Required field, text, wide, no restrictions'
        }, {
          label: 'Amount',
          name: 'amountSelectUnits',
          required: true,
          type: 'select',
          options: ['400', '600', '800'],
          wide: true,
          info: 'Selectable units',
          units: ['Kilograms', 'Meters']
        }, {
          label: 'Depth',
          description: 'This is the description of the field.',
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
          label: 'Units',
          name: 'units',
          required: true,
          type: 'number',
          units: 'units',
          min: -100,
          max: 100,
          expression: '^[\+\-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$',
          info: 'Required field, numeric, value between -100 and 100'
        }, {
          label: 'Email',
          name: 'email',
          readonly: true,
          required: true,
          wide: true,
          type: 'string',
          value: 'user@domain.no',
          info: 'Wide field, required, readonly, pre-filled value'
        }, {
          label: 'Color',
          name: 'color',
          wide: true,
          class: 'demo-field',
          type: 'string',
          value: 'Green',
          info: 'Has style class'
        }, {
          label: 'Checkbox 1',
          name: 'checkOne',
          type: 'checkbox',
          info: 'Checkbox'
        }, {
          label: 'Checkbox 2',
          name: 'checkTwo',
          type: 'checkbox',
          checked: true,
          readonly: true,
          info: 'Checkbox readonly'
        }, {
          label: 'No info',
          name: 'noInfo',
          wide: false,
          type: 'string',
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
  `;
  }

  createMinimumForm(): FormItem {
    return {
      name: 'Example form with minimum input ',
      fields: [
        {
          label: 'Main category',
          name: 'simpleCategory',
          type: 'select',
          options: ['Category 1'],
        }, {
          label: 'Name',
          name: 'simpleName',
          wide: true
        }
      ] as FormFieldItem[]
    } as FormItem;

  }

  createFullForm(): FormItem {
    return {
      name: 'Example form with all properties and fields set',
      description: 'This is the description of the form.',
      confirmation: 'This is the confirmation on form submit.',
      submitText: 'Submit form',
      resetText: 'Reset form',
      buttons: [
        {
          id: '1',
          label: 'Button 1',
          class: 'is-primary'
        }, {
          id: '2',
          label: 'Button 2',
          class: 'is-warning'
        }, {
          id: '3',
          label: 'Button 3'
        }
      ] as FormButton[],
      fields: [
        {
          label: 'Main category',
          name: 'categoryAddNew',
          required: true,
          type: 'select',
          options: ['Category 1', 'Category 2', 'Category 3'],
          canCreate: true,
          wide: true,
          info: 'Required field, list of objects, can create new'
        }, {
          label: 'Category',
          name: 'category',
          required: true,
          type: 'select',
          options: ['Category 4', 'Category 5', 'Category 6'],
          canCreate: false,
          info: 'Required field, list of objects, can not create new'
        }, {
          label: 'Name',
          name: 'name',
          required: true,
          wide: true,
          info: 'Required field, text, wide, no restrictions'
        }, {
          label: 'Amount',
          name: 'amountSelectUnits',
          required: true,
          type: 'select',
          options: ['400', '600', '800'],
          wide: true,
          info: 'Selectable units',
          units: ['Kilograms', 'Meters']
        }, {
          label: 'Depth',
          description: 'This is the description of the field.',
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
          label: 'Units',
          name: 'units',
          required: true,
          type: 'number',
          units: 'units',
          min: -100,
          max: 100,
          expression: '^[\+\-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$',
          info: 'Required field, numeric, value between -100 and 100'
        }, {
          label: 'Email',
          name: 'email',
          readonly: true,
          required: true,
          wide: true,
          type: 'string',
          value: 'user@domain.no',
          info: 'Wide field, required, readonly, pre-filled value'
        }, {
          label: 'Color',
          name: 'color',
          wide: true,
          class: 'demo-field',
          type: 'string',
          value: 'Green',
          info: 'Has style class'
        }, {
          label: 'Checkbox 1',
          name: 'checkOne',
          type: 'checkbox',
          info: 'Checkbox'
        }, {
          label: 'Checkbox 2',
          name: 'checkTwo',
          type: 'checkbox',
          checked: true,
          readonly: true,
          info: 'Checkbox readonly'
        }, {
          label: 'No info',
          name: 'noInfo',
          wide: false,
          type: 'string',
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
  }

  onSubmit1(formGroup: FormGroup) {
    const values = [];
    Object.keys(formGroup.controls).forEach(key => {
      values.push(key + ': ' + formGroup.controls[key].value);
    });
    alert('Form submitted: ' + JSON.stringify(values, null, 2));
  }

  onSubmit2(formGroup: FormGroup) {
    const values = [];
    Object.keys(formGroup.controls).forEach(key => {
      values.push(key + ': ' + formGroup.controls[key].value);
    });
    alert('Form submitted: ' + JSON.stringify(values, null, 2));
    this.showConfirmation = true;
  }

  onButtonClicked(id: string) {
    alert('Button clicked: ' + id);
  }

}
