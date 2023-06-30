import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  index: number | undefined;
  @Input() todos!: string[];

  deleteItem(deletedItem: string) {
    this.index = this.todos.findIndex((el) => el == deletedItem);
    this.todos.splice(this.index, 1);
  }
}
