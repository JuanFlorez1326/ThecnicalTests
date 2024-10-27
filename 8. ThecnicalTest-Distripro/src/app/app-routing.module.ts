import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './todo/components/add-todo/add-todo.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'list',
    title: 'Tasks App | All Tasks',
    component: TodoListComponent
  },
  {
    path: 'add',
    title: 'Tasks App | Add Task',
    component: AddTodoComponent
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}