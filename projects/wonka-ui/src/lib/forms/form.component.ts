import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormItem, FormFieldItem } from './form';


@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  @Input() form: FormItem;
  @Input() showConfirmation: boolean;
  @Input() showAbortButton: boolean;
  @Input() class: string;

  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() fieldValueChanged: EventEmitter<{fieldName: string, value: string}> = new EventEmitter<{fieldName: string, value: string}>();

  sintefForm: FormGroup;

  modalHeader: string;
  modalContent: string;

  showCreateNew: boolean[] = [];

  submitted = false;
  subscription: Subscription = new Subscription();

  formModel: {
    name: string,
    type: string,
    validators: string[]
  }[];

  constructor() { }

  ngOnInit() {
    if (!this.class) {
      this.class = '';
    }

    this.createForm();
  }

  createNew(name: string, index: number) {
    if (this.showCreateNew[index]) {
      const formField = this.form.fields.find((field) => {
        return field.name === name;
      });
      this.sintefForm.get(name + '_new').setValue('');
      this.sintefForm.get(name).setValue(formField.options[0]);
    } else {
      this.sintefForm.get(name).setValue('');
    }
    this.sintefForm.get(name).updateValueAndValidity();
    this.showCreateNew[index] =  !this.showCreateNew[index];
  }

  private createForm(): void {
    const form: FormGroup = new FormGroup({});

    for (const controlInfo of this.form.fields) {
      this.showCreateNew.push(false);
      const control: FormControl = new FormControl(
        null,
        this.setValidators(controlInfo.required, controlInfo.expression, controlInfo.min, controlInfo.max));
      if (!controlInfo.type) {
        controlInfo.type = 'string';
      }
      if (controlInfo.readonly) {
        control.disable();
      }
      if (controlInfo.type === 'select' && controlInfo.options) {
        control.setValue(controlInfo.options[0]);
        if (controlInfo.canCreate) {
          form.addControl(controlInfo.name + '_new', new FormControl(controlInfo.options[0]));
        }
        if (controlInfo.units && !this.isString(controlInfo.units)) {
          const unitControl = new FormControl(false);
          unitControl.setValue(controlInfo.units[0]);
          form.addControl(controlInfo.name + '_unit', unitControl);
        }
      }
      if (controlInfo.type === 'checkbox' && controlInfo.checked) {
        control.setValue(true);
      }
      if (controlInfo.value) {
        control.setValue(controlInfo.value);
        control.updateValueAndValidity();
      }
      this.subscription.add(control.valueChanges.subscribe(value => {
        this.fieldValueChanged.emit({fieldName: controlInfo.name, value});
      }));
      form.addControl(controlInfo.name, control);
      if (!this.form.submitText) {
        this.form.submitText = 'Submit';
      }
    }

    this.sintefForm = form;
  }

  get f() {
    return this.sintefForm.controls;
  }

  isString(field: string | string[]): boolean {
    return typeof field === 'string';
  }

  getInputField(field: FormFieldItem) {
    return this.sintefForm.get(field.name);
  }

  /**
   * Returning validators
   * @param required adds 'required' validator if not null
   * @param pattern adds provided regexp pattern if not null
   * @param min adds provided minimum value if not null
   * @param max adds provided maximum value if not null
   */
  private setValidators(required: boolean, pattern: string, min: number, max: number) {
    const validators = [];
    if (required) {
      validators.push(Validators.required);
    }
    if (min != null) {
      validators.push(Validators.min(min));
    }
    if (max != null) {
      validators.push(Validators.max(max));
    }
    if (pattern) {
      validators.push(Validators.pattern(pattern));
    }
    return validators;
  }

  info(field: any) {
    this.modalHeader = field.label;
    this.modalContent = field.info;
   }

  closeModal() {
    this.modalContent = null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.sintefForm.invalid) {
      return;
    }
    this.formSubmitted.emit(this.sintefForm);
  }

  onButtonClicked(id: string) {
    this.buttonClicked.emit(id);
  }

  revert() {
    this.sintefForm.reset();
  }

  trackByFn(index, item): any {
    return item.id;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
