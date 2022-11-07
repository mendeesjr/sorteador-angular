import { TaskService } from './../shared/task.service';
import {Task } from '../shared/task'

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task | undefined = new Task();
  title: string = 'Novo Usuário';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alterando Tarefa';
    }

  }

  onSubmit(){
    console.log(this.task);
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

}
