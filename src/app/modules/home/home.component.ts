import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  saldoInicial: number = 0;

  despesa: number = 0;

  saldo!: number;

  calcForm!: FormGroup;

  calcInput!: any;
  despesaInput!: any;

  constructor(private form_builder: FormBuilder) { }

  ngOnInit(): void {

    this.onFormInit();

  }

  onFormInit = () => {
    this.calcForm = this.form_builder.group({
      calcInput: [''],
      despesaInput: ['']
    })

  }
  
  deposito = () => {
    const calcInput = this.calcForm.controls['calcInput'].value;
    this.calcInput = calcInput;
  
    this.saldoInicial += this.calcInput ++;

    this.calcForm.reset();
  
  }

  adicionarDespesa = () => {
    const despesaInput = this.calcForm.controls['despesaInput'].value;

    this.despesaInput = despesaInput;
    this.saldoInicial -= this.despesaInput;
    
    this.despesa += this.despesaInput ++;

    this.calcForm.reset();
  
  }
}
