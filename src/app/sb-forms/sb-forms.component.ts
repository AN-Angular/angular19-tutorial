import { Component } from '@angular/core';
import { signalsFormGroup, signalsFormControl } from '@angular/forms';

@Component({
  selector: 'app-sb-forms',
  imports: [signalsFormGroup, signalsFormControl],
  templateUrl: './sb-forms.component.html',
  styleUrl: './sb-forms.component.css'
})
export class SbFormsComponent {

  // Define the form using signalsFormGroup and signalsFormControl
  form = signalsFormGroup({
    name: signalsFormControl(''),
    email: signalsFormControl('', { nonNullable: true }),
    age: signalsFormControl<number | null>(null)
  });

  // Accessors for signal values
  get name() {
    return this.form.controls.name();
  }

  get email() {
    return this.form.controls.email();
  }

  get age() {
    return this.form.controls.age();
  }
}
