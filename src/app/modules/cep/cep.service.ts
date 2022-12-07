import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  API_CEP = environment.API_IBGE

  // valor = new BehaviorSubject('valor inicial');


  constructor(private http: HttpClient) { }

  getCep = () => {
   return this.http.get(`${this.API_CEP}`, {
    params: new HttpParams().set('nome', '')
   })
  }
}
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos

