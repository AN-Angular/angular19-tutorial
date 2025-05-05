import { Component, signal, effect, computed } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent {

  // Basic signal
  count = signal(0); // same as count: WritableSignal<number> = signal(0);
  // Computed signal: derives a value
  doubleCount = computed(() => this.count() * 2);

  username = signal('Arjun'); // signal with string type
  displayHeader = signal(false); // signal with boolean type
  isHeaderVisible = false;

  constructor() {
    // effect is a function that runs whenever the signal changes
    effect(() => {
      console.log(`Hello ${this.username()}`); // log the value of username signal
      if(this.displayHeader()) {
        this.isHeaderVisible = true; // set the value of isHeaderVisible to true
      } else {
        this.isHeaderVisible = false; // set the value of isHeaderVisible to false
      }

      // Effect: runs code whenever count() or doubleCount() change
      console.log(`Count is ${this.count()}, Double Count is ${this.doubleCount()}`);
    });
  }

  toggleHeader() {
    this.displayHeader.set(!this.displayHeader()); // toggle the value of displayHeader signal
    console.log(this.isHeaderVisible); // log the value of isHeaderVisible
  }

  increment() {
    this.count.set(this.count() + 1); // increment the value of count signal
  }
}
