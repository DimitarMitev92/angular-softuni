import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditClickedService } from '../../../service/edit-clicked.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent {
  isCheckClicked: boolean = false;
  isEditClicked: boolean = false;
  @Input() todo!: string;
  @Output() deletedTodoEvent = new EventEmitter<string>();

  constructor(private editClickedService: EditClickedService) {}

  onCheck() {
    this.isCheckClicked = !this.isCheckClicked;
  }

  addDeletedItem(value: string) {
    this.deletedTodoEvent.emit(value);
  }

  setEditClickedBoolean() {
    this.isEditClicked = !this.isEditClicked;
    this.editClickedService.setEditClickedValue(this.isEditClicked);
    console.log('Clicked');
    console.log(this.editClickedService.getEditClickedValue());
  }
}
