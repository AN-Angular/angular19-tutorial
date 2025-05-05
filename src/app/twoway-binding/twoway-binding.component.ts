import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-twoway-binding',
  imports: [FormsModule],
  templateUrl: './twoway-binding.component.html',
  styleUrl: './twoway-binding.component.css'
})
export class TwowayBindingComponent {

  name = 'Arjun Naik'; // string
}