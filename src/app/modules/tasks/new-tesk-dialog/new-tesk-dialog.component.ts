import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { TaskREQ } from '../tasks';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-tesk-dialog',
  templateUrl: './new-tesk-dialog.component.html',
  styleUrls: ['./new-tesk-dialog.component.scss']
})
export class NewTeskDialogComponent implements OnInit {

  tasksForm!: UntypedFormGroup;

  newTask!: TaskREQ;

  taskTitle!: any;
  taskDescription!: any;

  constructor(
    private form_builder: UntypedFormBuilder,
    private tasksService: TasksService,
    private dialog_ref: MatDialogRef<NewTeskDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.onFormInit();

    this.tasksService.addTesk.subscribe(res =>
      this.taskTitle = res.title
      
    )

  }

  onFormInit = () => {
    this.tasksForm = this.form_builder.group({
      titleInput: [''],
      descriptionInput: ['']
    })
  }

  handleSubmitForm = () => {
    
    this.tasksService.addTesk.next({title: this.taskTitle, description: this.taskDescription})

    const titleInput = this.tasksForm.controls['titleInput'].value;
    const descriptionInput = this.tasksForm.controls['descriptionInput'].value;

    this.newTask = {
      title: titleInput,
      description: descriptionInput
    }

    // this.taskTitle = this.newTask.title

    
    this.tasksService.postTask(this.newTask).subscribe(res => {
      console.log('Tarefa adicionada com sucesso!')
      this.dialog_ref.close();
    })

    console.log('ADD task', this.taskTitle)


  

  }

}
