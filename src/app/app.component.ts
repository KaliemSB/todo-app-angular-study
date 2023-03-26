import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoInput = '';
  tasks = [{ title: 'Learn Angular', completed: false }];

  addTask() {
    this.tasks.push({ title: this.todoInput, completed: false });
    this.todoInput = '';
  }

  completeTask(index: number) {
    console.log(this.tasks);

    this.tasks[index].completed = true;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
