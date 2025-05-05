import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css'
})
export class ComputedSignalsComponent {

  data1 = signal(10); // signal with number type
  data2 = signal(100); // signal with number type
  total = computed(() => {
    return this.data1() + this.data2(); // computed signal that returns the value of data signal + 10
  });

  updateValue() {
    // this.data.update(val => val + 10); // cannot be updated directly since they are computed signals

    console.log(this.total()); // 110
    this.data2.update(val => val + 20); 
    console.log(this.total()); // 130
  }

  // Use computed when you need to derive a new value based on signals.
  // Use effect when you need to do something (logging, fetching data, updating external things) when signals change.


}
