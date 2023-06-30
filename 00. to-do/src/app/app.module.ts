import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { PopupComponent } from './components/popup/popup.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ToDoItemComponent } from './components/to-do-list/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    PopupComponent,
    ToDoComponent,
    ToDoItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
