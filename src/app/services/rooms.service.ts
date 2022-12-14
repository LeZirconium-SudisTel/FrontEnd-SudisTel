import { CountRooms } from './../models/CountRooms';
import { Subject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  url: string = "http://localhost:8080/rooms";
  private listaCambio = new Subject<Room[]>();
  constructor(private http: HttpClient) { }

  mostrarHabitaciones() {
    return this.http.get<Room[]>(this.url);
  }
  Insertar(room: Room) {
    return this.http.post(this.url, room);
  }
  setLista(listaNueva: Room[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(room: Room) {
    return this.http.put(this.url, room);
  }
  listarId(id: number) {
    return this.http.get<Room>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Room[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  buscarEstado() {
    return this.http.get<Room[]>(`${this.url}/buscar_estado`);
  }
  
  buscarCantidad() {

    return this.http.get<CountRooms[]>(`${this.url}/cantidad_hotel`);
  }

}
