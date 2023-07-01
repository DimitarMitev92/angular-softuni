import { Component } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private fetchDataService: FetchDataService) {}

  onAddHandler(text: string): any {
    this.fetchDataService.postData({
      userId: 1,
      title: `${text}`,
      completed: false,
    });
  }
}
