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
    units?: string | string[];
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
