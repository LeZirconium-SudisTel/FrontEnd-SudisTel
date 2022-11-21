import { Reservation } from 'src/app/models/Reservation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { RespuestaReservacion } from '../models/RespuestaReservacion';
@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  url: string = 'http://localhost:8080/reservations';
  private listaCambio = new Subject<Reservation[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) {}

  mostrarReservas() {
    return this.http.get<Reservation[]>(this.url);
  }

  crearReserva(reservation: Reservation) {
    return this.http.post(this.url, reservation);
  }
  modificar(reservation: Reservation) {
    return this.http.put(this.url, reservation);
  }
  setLista(listaNueva: Reservation[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listarId(id: number) {
    return this.http.get<Reservation>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  getConfirmaEliminacion() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
  listarCantidadTarjetas(){
    return this.http.get<RespuestaReservacion[]>(`${this.url}/cantidad_tarjetas`)
  }
}
