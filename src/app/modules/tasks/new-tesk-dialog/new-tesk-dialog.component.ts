import { Component, OnInit, Input, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskREQ } from '../tasks';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-tesk-dialog',
  templateUrl: './new-tesk-dialog.component.html',
  styleUrls: ['./new-tesk-dialog.component.scss']
})
export class NewTeskDialogComponent implements OnInit {
  @Input() onGetTasks!: Function;

  tasksForm!: UntypedFormGroup;

  newTask!: TaskREQ;

  taskTitle!: any;
  taskDescription!: any;

  titleInput!: string;
  descriptionInput!: string;

  currentTask!: TaskREQ;


  constructor(
    private form_builder: UntypedFormBuilder,
    private tasksService: TasksService,
    private dialog_ref: MatDialogRef<NewTeskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private mat_dialog_data: any,
  ) { }

  ngOnInit(): void {
    this.onFormInit();
    console.log('mat_dialog_data', this.mat_dialog_data)

    if(this.mat_dialog_data.currentTask){
      this.currentTask = this.mat_dialog_data.currentTask;

      this.tasksForm.controls['titleInput'].setValue(this.currentTask.title)
      this.tasksForm.controls['descriptionInput'].setValue(this.currentTask.description)
    }
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
      this.mat_dialog_data();
      this.dialog_ref.close();
    })
    
  }

  
}
