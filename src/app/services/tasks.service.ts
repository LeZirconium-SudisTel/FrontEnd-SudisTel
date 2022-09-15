import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url:string = "http://localhost:3000/hotel_tasks"

  constructor(private http:HttpClient) { }
ListarTareas(){

  return this.http.get<Task[]>(this.url);
}
}
