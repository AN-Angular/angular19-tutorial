import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  
  // Using FormControl
  name = new FormControl('Arjun'); // FormControl is used to create a form control
  password = new FormControl('Test@123'); // FormControl is used to create a form control
  email = new FormControl('Test@gmail.com'); // FormControl is used to create a form control

  // Using FormGroup
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.email])
  });

  submitData() {
    console.log(this.profileForm.value); // Get the value of the form control
  }

  getValue() {
    console.log(this.name.value); // Get the value of the form control
    console.log(this.password.value); // Get the value of the form control
    console.log(this.email.value); // Get the value of the form control
  }

  setValue() {
    this.name.setValue(''); // Set the value of the form control
    this.password.setValue(''); // Set the value of the form control  
    this.email.setValue(''); // Set the value of the form control
  }

  // defining getters and setters
  get nameValue() {
    return this.profileForm.get('name'); // Get the value of the form control
  }

  get passwordValue() {
    return this.profileForm.get('password'); // Get the value of the form control
  }

  get emailValue() {
    return this.profileForm.get('email'); // Get the value of the form control
  }

}
