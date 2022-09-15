import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  url: string="http://localhost:3000/rooms";
  constructor(private http: HttpClient) { }

  mostrarHabitaciones(){
    return this.http.get<Room[]>(this.url);
  }
}
