import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  public todoForm!: FormGroup;
  public priorityValues = ['High', 'Medium', 'Low'];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.formNewTask();
  }

  public formNewTask() {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
      priority: ['', Validators.required]
    });
  }

  public addTodo() {
    if(this.todoForm.valid) {
      const { description, priority } = this.todoForm.value;
      this.todoService.addTodo(description, priority);
      this.router.navigateByUrl('/list');
    }
  }

}