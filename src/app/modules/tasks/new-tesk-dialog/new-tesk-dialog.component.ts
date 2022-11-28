import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { TaskREQ } from '../tasks';
@Component({
  selector: 'app-new-tesk-dialog',
  templateUrl: './new-tesk-dialog.component.html',
  styleUrls: ['./new-tesk-dialog.component.scss']
})
export class NewTeskDialogComponent implements OnInit {

  tasksForm!: FormGroup;

  newTask!: TaskREQ;

  constructor(private form_builder: FormBuilder) { }

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

    alert(this.newTask)
  

  }

}
