import { Task } from './../models/Task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url:string = "http://localhost:3000/hotel_tasks";
  private listaCambio = new Subject<Task[]>()

  constructor(private http:HttpClient) { }
ListarTareas(){

  return this.http.get<Task[]>(this.url);
}
insertar(resource: Task) {
  return this.http.post(this.url, resource);
}

setLista(listaNueva: Task[]) {
  this.listaCambio.next(listaNueva);
}

getLista() {
  return this.listaCambio.asObservable();
}

modificar(task: Task) {
  return this.http.put(this.url + "/" + task.id, task);
}

listarId(id: number){
  return this.http.get<Task>(`${this.url}/${id}`);
}


}
