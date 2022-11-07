import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskSortComponent } from './tasks/task-sort/task-sort.component';

const routes: Routes = [
  {  path:'', component: TaskListComponent },
  {  path:'new', component: TaskFormComponent },
  {  path:'edit/:id', component: TaskFormComponent },
  {  path:'sortear', component: TaskSortComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
