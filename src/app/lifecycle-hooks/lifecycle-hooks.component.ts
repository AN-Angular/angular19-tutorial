import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {

  constructor() {
    console.log('Constructor() called');
  }

  ngOnInit() {
    console.log('ngOnInit() called');
  }
  
  ngOnChanges() {
    console.log('ngOnChanges() called');
  }
  
  ngDoCheck() {
    console.log('ngDoCheck() called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy() called');
  }

}
