import { Component, signal, effect } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { ProductSearchService } from './service/product-search.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-signals-and-observables',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './signals-and-observables.component.html',
  styleUrl: './signals-and-observables.component.css',
  providers: [ProductSearchService]
})
export class SignalsAndObservablesComponent {

  // Local UI state
  searchText = signal('');
  category = signal('');
  isLoading = signal(false);

  // Convert signals to observables for RxJS pipeline
  private search$ = toObservable(this.searchText);
  private category$ = toObservable(this.category);

  // Result signal
  products = toSignal(
    combineLatest([this.search$, this.category$]).pipe(
      debounceTime(300),
      switchMap(([text, category]) => {
        this.isLoading.set(true);
        return this.productSearchService.search(text, category);
      })
    )
  );

  constructor(private productSearchService: ProductSearchService) {
    // Effect: reset loading when products change
    effect(() => {
      this.products();
      this.isLoading.set(false);
    });
  }

}

// summary: Who Does What
// Responsibility	Signal or RxJS?	Why
// searchText, category, isLoading	✅ Signals	Fast, sync, fine-grained UI reactivity
// Debounce & Async HTTP search	✅ RxJS	Time-based & async handling
// Render products	✅ Signal (products())	Auto-updates view on change

// private search$ = toObservable(this.searchText);
// private category$ = toObservable(this.category);
// ✅ It converts Angular signals (searchText and category) into RxJS observables.

// 🤔 Why is this done?
// 🔁 Because RxJS operators like debounceTime(), combineLatest(), and switchMap() only work with observables, not signals.

// 1. searchText and category are signals:
// ts
// Copy
// Edit
// searchText = signal('');
// category = signal('');
// These hold current values (e.g. '', 'electronics')

// You can bind them to form inputs and get immediate value updates in the component.

// Signals are great for UI-level state (fast and synchronous)

// 2. But RxJS is needed for:
// Debouncing user input (to avoid hammering the server)

// Combining multiple values (searchText + category)

// Making async HTTP requests (like product search)

// And RxJS pipelines require observables.

// ✅ Summary
// Signals	Observables
// Hold local UI state	Manage async workflows
// Immediate access (signal())	Stream of changes over time
// Used in template with [(model)]	Used with RxJS operators

// Converting signals to observables allows mixing powerful RxJS operators with easy-to-manage UI state — it’s the best of both worlds.

// combineLatest() is an RxJS operator that:
// Combines multiple observables and emits the latest values from each one whenever any of them emits a new value.
// combineLatest([obs1, obs2])
// will emit a new value [searchText, category] every time either obs1 or obs2 changes — but only after both have emitted at least once.