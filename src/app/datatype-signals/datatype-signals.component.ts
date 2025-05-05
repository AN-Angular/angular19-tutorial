import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-datatype-signals',
  imports: [],
  templateUrl: './datatype-signals.component.html',
  styleUrl: './datatype-signals.component.css'
})
export class DatatypeSignalsComponent {

    data = signal(100); // signal with number type

    // data2 = signal<number | string>(100); // signal with number or string type  

    // same as above
    // data: WritableSignal<number | string> = signal(100); // signal with number or string type

    // WritableSignal is a type of signal that allows you to set the value of the signal
    // <number | string> is a datatype of that signal


    count: Signal<number> = computed (() => {
        return this.data() + 10; // computed signal is read readonly signal and cannot be set 
    });

    // updateValue2() {
    //   this.data2.set("hello"); // set the value of data signal to 101
    // }

    setValue() {
        this.data.set(this.data() + 1); // set the value of data signal to 101
    }

    updateValue() {
      this.data.update(val=> val + 10); // set the value of data signal to 101
    }
}
