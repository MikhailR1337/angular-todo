import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { ItemComponent } from './item/item.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    TodoComponent,
    ItemComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
