import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  cepList: any = [{}];

  valorAlterado!: Subject<any>;

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
    // this.cepService.getCep().subscribe(res => {
    //   // console.log('cep', res)
    //   this.cepList = res
    // })
    
  }

  handleMudarValor = () => {
    this.cepService.valor.next('Alterado')

    this.cepService.getValor

    console.log('valorAlterado', this.valorAlterado)
  }

}
