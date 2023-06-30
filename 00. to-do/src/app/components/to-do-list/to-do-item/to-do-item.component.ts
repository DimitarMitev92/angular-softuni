import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../../services/fetch-data.service';
import { Todo } from 'src/app/interfaces/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit(): void {
    this.fetchDataService.getData().subscribe((data) => (this.todoList = data));
  }

  onCheckHandler(i: number) {
    this.fetchDataService
      .checkUpdate(i + 1, {
        userId: this.todoList[i].userId,
        id: this.todoList[i].id,
        title: this.todoList[i].title,
        completed: !this.todoList[i].completed,
      })
      .subscribe((data) => (this.todoList[i] = data));
  }

  onEditHandler(i: number) {
    console.log('Edit clicked');
  }

  onDeleteHandler(i: number) {
    this.fetchDataService.deleteData(i).subscribe((data) => console.log(data));
  }
}
