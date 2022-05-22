import { Component } from '@angular/core';
import { Todo } from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [];

  public addTodo = (todo: Todo) => {
    this.todos = [...this.todos, todo];
  }

  public removeTodo = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  } 
}
