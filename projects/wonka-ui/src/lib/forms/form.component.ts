import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * Interface for declaring a button object to use as button for <lib-form>.
 */
export interface FormButton {
    id: string;
    label: string;
    class: string;
}

/**
 * Interface for declaring a input field object to use as input for <lib-form>.
 */
export interface FormFieldItem {
    /** The visible label of the input field. */
    label: string;
    /** The name of the form control associated with the input field. */
    name: string;
    /** Optional. Required validator. */
    required?: boolean;
    /** Optional pre-filled value. */
    value?: string;
    /** Optional. If true, the field will be read-only and disabled. */
    readonly?: boolean;
    /** Optional. If true, the field width is set to 100%. */
    wide?: boolean;
    /** Optional. Style class of the input field container. */
    class?: string;
    /** Optional. Type of input ('string', 'number', 'select'). */
    type?: string;
    /** Optional. Used for type select. Indicates if the user can create a new instance in addition to existing options. */
    canCreate?: boolean;
    /** Optional. Used for type select. Pre-filled options. */
    options?: string[];
    /** Optional. Visible behind input field if it exists. */
    checked?: boolean;
    /** Optional. Used for type checkbox. */
    units?: string;
    /** Optional. Minimum value validator. */
    min?: number;
    /** Optional. Maximum value validator. */
    max?: number;
    /** Optional. Expression to validate input values. */
    expression?: string;
    /** Optional. Visible as clickable icon behind input field if it exists, and opens a modal overlay with info. */
    info?: string;
}

/**
 * Interface for declaring a form object to use as input for <lib-form>
 */
export interface FormItem {
    /** The name of the form. */
    name: string;
    /** Optional. Description visible in info field above input fields. */
    description?: string;
    /** Optional. Visible as confirmation text on submit. */
    confirmation?: string;
    /** Form fields. */
    fields: FormFieldItem[];
    /** Optional. Buttons. */
    buttons?: FormButton[];
    /** Visible text on submit button. */
    submitText: string;
    /** Optional. Visible text on reset button. */
    resetText?: string;
}

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  @Input() form: FormItem;
  @Input() showConfirmation: boolean;
  @Input() showAbortButton: boolean;
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
    this.createForm();
  }

  createNew(name: string, index: number) {
    this.sintefForm.get(name).setValue('');
    this.sintefForm.get(name).updateValueAndValidity();
    this.showCreateNew[index] =  !this.showCreateNew[index];
    this.sintefForm.get(name + '_new')
      .setValue(
        this.showCreateNew[index] ? true : false
      );
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
          form.addControl(controlInfo.name + '_new', new FormControl(false));
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
