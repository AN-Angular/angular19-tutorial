import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  imports: [    
    NgIf, // NgIf is used for structural directives (in order to use *ngIf)
    NgFor, // NgFor is used for structural directives (in order to use *ngFor)
    NgSwitch, // NgSwitch is used for structural directives (in order to use *ngSwitch)
    NgSwitchCase, // NgSwitchCase is used for structural directives (in order to use *ngSwitchCase)
    NgSwitchDefault // NgSwitchDefault is used for structural directives (in order to use *ngSwitchDefault)
  ],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {

  isLoggedIn = true; // boolean
  showHeader = true; // boolean
  students = ["Arjun Naik", "Siddharth Naik", "Shivam Naik", "Sumit Pednekar"]; // array of strings
  studentData = [
    { id: 1, name: "Arjun Naik", age: 22, email: 'arjun@test.com' },
    { id: 2, name: "Siddharth Naik", age: 23, email: 'sidharth@test.com' },
    { id: 3, name: "Shivam Naik", age: 17, email: 'shivam@test.com'  },
    { id: 4, name: "Sumit Pednekar", age: 25, email: 'sumit@test.com'  }
  ]; // array of objects

  color = 'red'; // string
}
