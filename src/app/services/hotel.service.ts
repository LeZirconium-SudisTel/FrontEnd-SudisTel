import { EMPTY, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../models/Hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  url: string = 'http://localhost:3000/hotels';
  private listaCambio = new Subject<Hotel[]>();
  constructor(private http: HttpClient) {}

  mostrarHotel() {
    return this.http.get<Hotel[]>(this.url);
  }

  insertarHotel(hotel:Hotel){
    return this.http.post(this.url, hotel);
  }

  setLista(listaNueva: Hotel[]) {
    return this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  listarId(id: number){
    return this.http.get<Hotel>(`${this.url}/${id}`);
  }

  buscarHotelPorProvincia(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Hotel[]>(
        `${this.url}/buscar`,
        texto.toLocaleLowerCase(),
        {}
      );
    }
    return EMPTY;
  }
}
