import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepRoutingModule } from './cep-routing.module';
import { CepComponent } from './cep.component';


@NgModule({
  declarations: [
    CepComponent
  ],
  imports: [
    CommonModule,
    CepRoutingModule
  ]
})
export class CepModule { }
