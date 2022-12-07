import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
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
  }

  onFormInit = () => {
    this.tasksForm = this.form_builder.group({
      titleInput: [''],
      descriptionInput: ['']
    })
  }

  handleSubmitForm = () => {
    const titleInput = this.tasksForm.controls['titleInput'].value;
    const descriptionInput = this.tasksForm.controls['descriptionInput'].value;

    this.newTask = {
      title: titleInput,
      description: descriptionInput
    }
    
    this.tasksService.postTask(this.newTask).subscribe(res => {
      this.tasksService.addTesk.next({title: this.taskTitle, description: this.taskDescription})
      console.log('Tarefa adicionada com sucesso!')
      this.dialog_ref.close();
    })
  }
}
