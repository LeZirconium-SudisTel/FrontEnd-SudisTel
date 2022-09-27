import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  url: string="http://localhost:3000/rooms";
  private listaCambio= new Subject<Room[]>();
  constructor(private http: HttpClient) { }

  mostrarHabitaciones(){
    return this.http.get<Room[]>(this.url);
  }
  Insertar(room:Room){
    return this.http.post(this.url,room);

  }
  setLista(listaNueva:Room[]){
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
