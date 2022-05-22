import { Component, Input } from '@angular/core';

import { Todo } from '../types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() addTodo: ((todo: Todo) => void) | undefined;

  public value = '';

  public todoHandler() {
    if (this.value === "") {
      return;
    }
    const todo = { id: Date.now(), name: this.value};
    this.addTodo && this.addTodo(todo);
    this.clearValue();
  }

  private clearValue() {
    this.value = '';
  }
}
