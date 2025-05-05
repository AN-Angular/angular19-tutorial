import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-get-set-input-value',
  imports: [],
  templateUrl: './get-set-input-value.component.html',
  styleUrl: './get-set-input-value.component.css'
})
export class GetSetInputValueComponent {

  @ViewChild('userName') nameInput: ElementRef | undefined; // ElementRef is used to get the reference of the input element
  
  onInput($event: Event) {
    const name = ($event.target as HTMLInputElement).value;
    console.log(name);
    
    console.log(this.nameInput?.nativeElement.value); // nativeElement is used to get the value of the input element
  }
}
