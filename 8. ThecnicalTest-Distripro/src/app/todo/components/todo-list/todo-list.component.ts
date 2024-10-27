import { Todo } from '../../interfaces/todo.interface';
import { Component, SimpleChanges } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public todos: Todo[] = this.todoService.todos;

  constructor(
    private todoService: TodoService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) this.todos = this.todoService.todos;
  }

  public deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }

  public checkTask(id: string) {
    this.todoService.completedTodo(id); 
  }

}