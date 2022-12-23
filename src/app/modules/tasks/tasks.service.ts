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
  API_FIREBASE = environment.API_FIREBASE;

  addTesk = new BehaviorSubject<TaskREQ>({title: 'T Inicial', description: 'D inicial'})

  putTitle!: any;
  putDescription!: any;

  constructor(
    private http: HttpClient
  ) { }

  getTasks = (): Observable<TaskREQ> => {
    return this.http.get<TaskREQ>(`${this.API_FIREBASE}`)
  }

  deletTask = (id: number) => {
    return this.http.delete(`${this.API_FIREBASE}/tasks/${id}`)
  }

  putTask = (id: number, task: TaskREQ) => {
    return this.http.put(`${this.API_FIREBASE}/tasks/${id}`, {
      title: task.title,
      description: task.description
    })
  }

  postTask = (newTask: TaskREQ) => {
    return this.http.post<TaskREQ>(`${this.API_FIREBASE}`, {
      title: newTask.title,
      description: newTask.description
    })
  }

}
