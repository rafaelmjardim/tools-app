import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  calcForm!: FormGroup;

  calcInput!: FormControl;

  constructor(private form_builder: FormBuilder) { }

  ngOnInit(): void {

    this.onFormInit();

  }

  onFormInit = () => {
    this.calcForm = this.form_builder.group({
      calcInput: ['']
    })

  }
  
  handleInput = () => {
    
    const calcInput = this.calcForm.controls['calcInput'].value;
  
    this.calcInput = calcInput;
  
    console.log('input', this.calcInput)
  }
}
