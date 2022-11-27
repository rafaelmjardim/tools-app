import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskREQ } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API = environment.API_KEY;
  SERVER = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getPosts = () => {
    return this.http.get<any>(`${this.SERVER}/tasks`)
  }

}
