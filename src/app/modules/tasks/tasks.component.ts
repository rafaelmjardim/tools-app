import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks!: any;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

    this.onGetTasks();

  }

  
  onGetTasks = () => {
    this.tasksService.getTasks().subscribe(res => {
      this.tasks = res;      
    })
  }
  
  handleDeletTasks = (id: number) => {
    this.tasksService.deletTasks(id).subscribe(res => {
      //atualiza o get quando for deletado
      this.onGetTasks();
    })
  }
}
