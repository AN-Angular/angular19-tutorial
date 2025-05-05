import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  title = 'Angular 19 Tutorial'; // property
  todaysDate = new Date(); // property
  priceAmount = 1000; // property
}
