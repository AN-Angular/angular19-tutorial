import { Component, model } from '@angular/core';

@Component({
  selector: 'app-sb-twoway-binding',
  imports: [],
  templateUrl: './sb-twoway-binding.component.html',
  styleUrl: './sb-twoway-binding.component.css'
})
export class SBTwowayBindingComponent {

  count = model(0) // number 

  increment() {
    this.count.update(value => value + 1);
  } // method to increment the count

  decrement() { 
    this.count.update(value => value - 1);
  } // method to decrement the count  
  
}
