import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pd-child-to-parent',
  imports: [],
  templateUrl: './pd-child-to-parent.component.html',
  styleUrl: './pd-child-to-parent.component.css'
})
export class PdChildToParentComponent {
  @Output() getUsers = new EventEmitter(); // property
  users = ["Arjun", "sahil", "Prajot", "Siddhi", "Shivam", "Aditi", "Ankita", "Aarav", "Aarvi", "Aarvi"]; // property

  ngOnInit() {
    this.getUsers.emit(this.users); // method
  } // method
}
