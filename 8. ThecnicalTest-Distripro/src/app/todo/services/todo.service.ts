import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor() {
    this.loadTodos();
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  public loadTodos() {
    const todos = localStorage.getItem('todos');
    if(todos) {
      this.todos = JSON.parse(todos);    
    }
  }

  public addTodo( description: string, priority: string ) {
    this.todos.push({
      id: String(Math.floor(Math.random() * 1) + Date.now()),
      description, 
      priority, 
      completed: false
    });
    this.saveTodos();
  }

  public deleteTodo(id: string) {
    const index = this.todos.findIndex((todo: Todo) => todo.id === id);
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  public completedTodo(id: string) {
    const todo = this.todos.find((todo: Todo) => todo.id === id);
    if(todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
    }
  }
}