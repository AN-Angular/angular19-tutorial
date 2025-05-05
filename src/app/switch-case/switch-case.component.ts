import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.css'
})
export class SwitchCaseComponent {

  color: string = 'yellow'; // string

  handleColorChange(color: string) {
    this.color = color; // set the color to the selected color
  }
}
