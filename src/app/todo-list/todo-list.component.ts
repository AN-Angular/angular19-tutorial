import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

    task = ''; // string
    taskList: { 'id': number, 'name': string }[] = []; // array of strings

    addTask() {
        if (this.task) {
            this.taskList.push({ id: this.taskList.length + 1, name: this.task });
            this.task = '';
        }
    } // method to add task

    deleteTask(taskId: number) {
        this.taskList = this.taskList.filter(item => item.id !== taskId);
    } // method to delete task

    
}
