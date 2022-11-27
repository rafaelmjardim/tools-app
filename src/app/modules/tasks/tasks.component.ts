import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  posts: any[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

    this.tasksService.getPosts().subscribe(res => {
      this.posts = res;
      console.log ('posts',this.posts)
      
    })

  }

}
