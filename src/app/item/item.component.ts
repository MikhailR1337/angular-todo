import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() todos: Todo[] | undefined;
  @Input() removeTodo: ((id: number) => void) | undefined;
}
