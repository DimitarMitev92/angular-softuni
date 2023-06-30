import { Component } from '@angular/core';
import { EditClickedService } from '../../service/edit-clicked.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  isEditClicked: boolean = false;

  constructor(private editClickedService: EditClickedService) {}

  ngDoCheck() {
    this.isEditClicked = this.editClickedService.getEditClickedValue();
  }
}
