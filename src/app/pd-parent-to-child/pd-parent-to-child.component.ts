import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pd-parent-to-child',
  imports: [],
  templateUrl: './pd-parent-to-child.component.html',
  styleUrl: './pd-parent-to-child.component.css'
})
export class PdParentToChildComponent {

  @Input() username: string = 'Govt Account'; // property
}
