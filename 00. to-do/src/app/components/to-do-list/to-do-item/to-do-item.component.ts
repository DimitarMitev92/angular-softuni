import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent {
  isCheck: boolean = false;
  @Input() todo!: string;
  @Output() deletedTodoEvent = new EventEmitter<string>();

  addDeletedItem(value: string) {
    this.deletedTodoEvent.emit(value);
  }

  onCheck() {
    this.isCheck = true;
    console.log(this.isCheck);
  }
}
