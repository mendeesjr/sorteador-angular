import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-sort',
  templateUrl: './task-sort.component.html',
  styleUrls: ['./task-sort.component.css']
})
export class TaskSortComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService : TaskService) { }

  verificaPresenca(value) {
    return value != true;
  }

  ngOnInit(): void {
    let ts = this.taskService.getAll().filter((dados:any)=>{ return !dados.completed;});

    for (let i = 0; i < ts.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [ts[i], ts[j]] = [ts[j], ts[i]];
     }

     console.log(ts);

    this.tasks = ts.sort();
  }

}
