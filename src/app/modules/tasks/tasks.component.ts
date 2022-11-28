import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { NewTeskDialogComponent } from './new-tesk-dialog/new-tesk-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks!: any;

  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog
  ) { }

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

  handleOpenDialog = () => {
    this.dialog.open(NewTeskDialogComponent, {
      width: '30rem',
      height: '40rem',
    })
  }
}
