import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {

  users: string[] = ['Arjun', 'Sahil', 'Saidatta', 'Prajot']; // array of strings
  students = [
    { name : 'Arjun', age: 23, city: 'Pune' },
    { name : 'Sahil', age: 24, city: 'Mumbai' },
    { name : 'Saidatta', age: 25, city: 'Nagpur' },
    { name : 'Prajot', age: 26, city: 'Delhi' }
  ] // array of objects
}
