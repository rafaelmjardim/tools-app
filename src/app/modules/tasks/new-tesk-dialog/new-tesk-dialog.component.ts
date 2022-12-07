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

  titleInput!: string;
  descriptionInput!: string;

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

  onSetInputs = () => {
    this.titleInput = this.tasksForm.controls['titleInput'].value;
    this.descriptionInput = this.tasksForm.controls['descriptionInput'].value;
  }

  handleSubmitForm = () => {
    this.onSetInputs()

    this.newTask = {
      title: this.titleInput,
      description: this.descriptionInput
    }
    
    this.tasksService.postTask(this.newTask).subscribe(res => {
      console.log('Tarefa adicionada com sucesso!')
      this.dialog_ref.close();
    })
    
  }
}
