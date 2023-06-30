import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditClickedService {
  private isEditClicked!: boolean;

  constructor() {}

  setEditClickedValue(value: boolean) {
    this.isEditClicked = value;
  }

  getEditClickedValue() {
    return this.isEditClicked;
  }
}
