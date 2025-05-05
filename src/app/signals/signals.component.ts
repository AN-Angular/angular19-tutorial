import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  data = 100;
  count = signal(10);

  constructor() {
    
    effect(() => {
      console.log('The value of count is: ', this.count()); // effect() triggers when signals value changes but doesn't trigger when normal property is changed
      // used to trigger something when the signal value changes, ex show some alert, redirect page or something similar
    });

  }

  updateSignalValue() {
    this.count.set(this.count() + 1); // set the value of count signal to 20
  }

  updatePropertyValue() {
    this.data += 1; // set the value of data property to 200
  }
}
