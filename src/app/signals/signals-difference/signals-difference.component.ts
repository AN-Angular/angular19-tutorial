  import { Component, signal, Signal, WritableSignal, computed } from '@angular/core';

@Component({
  selector: 'app-signals-difference',
  imports: [],
  templateUrl: './signals-difference.component.html',
  styleUrl: './signals-difference.component.css'
})
export class SignalsDifferenceComponent {

  count: WritableSignal<number> = signal(0); // writable

  double: Signal<number> = computed(() => this.count() * 2); // readonly

  // count();          // ✅ read
  // count.set(5);     // ✅ write
  // double();         // ✅ read only
  // double.set(10); // ❌ Error: set() does not exist on Signal<T>

  // WritableSignal is a type/interface where as signal(0) is a method


  // _count = signal(10);
  // count: Signal<number> = this._count;
  // doubleCount: Signal<number> = computed(() => this._count() * 2)

  
}
