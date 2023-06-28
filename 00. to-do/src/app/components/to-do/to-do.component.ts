import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  todos: string[] = ['Shopping', 'Rent pay', 'Cleaning'];

  addTodo(todo: string) {
    this.todos.push(todo);
  }
}
