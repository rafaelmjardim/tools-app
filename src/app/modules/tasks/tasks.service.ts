import { HttpClient, HttpParams } from '@angular/common/http';
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

  addTesk = new BehaviorSubject<TaskREQ>({title: 'T Inicial', description: 'D inicial'})

  constructor(
    private http: HttpClient
  ) { }

  getTasks = (): Observable<TaskREQ> => {
    return this.http.get<TaskREQ>(`${this.SERVER}/tasks`)
  }

  deletTask = (id: number) => {
    return this.http.delete(`${this.SERVER}/tasks/${id}`)
  }

  putTask = (id: number) => {
    return this.http.put(`${this.SERVER}/tasks/${id}`, 'task')
  }

  postTask = (newTask: TaskREQ) => {
    return this.http.post<TaskREQ>(`${this.SERVER}/tasks`, {
      title: newTask.title,
      description: newTask.description
    })
  }

}
