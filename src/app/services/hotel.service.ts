import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../models/Hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  url: string = 'http://localhost:3000/hotels';
  constructor(private http: HttpClient) {}

  mostrarHotel(){
    return this.http.get<Hotel[]>(this.url)
  }
}
