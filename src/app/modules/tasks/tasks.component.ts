import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: any[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

    this.tasksService.getPosts().subscribe(res => {
      this.tasks = res;
      console.log ('tasks',this.tasks)
      
    })

  }

}
