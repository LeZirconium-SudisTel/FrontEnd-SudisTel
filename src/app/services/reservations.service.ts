import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/Reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  url: string = 'http://localhost:3000/reservations';
  constructor(private http: HttpClient ) {}
  mostrarReservas(){
    return this.http.get<Reservation[]>(this.url)
}}
