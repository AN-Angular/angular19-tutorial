import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-conditions',
  imports: [],
  templateUrl: './if-else-conditions.component.html',
  styleUrl: './if-else-conditions.component.css'
})
export class IfElseConditionsComponent {

  isLoggedIn: boolean = false; // boolean
  
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn; // toggle the value of isLoggedIn
  }
}
