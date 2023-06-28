import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() todoEvent = new EventEmitter<string>();

  onAddHandler(inputRef: HTMLInputElement): void {
    this.todoEvent.emit(inputRef.value);
    inputRef.value = '';
  }
}
