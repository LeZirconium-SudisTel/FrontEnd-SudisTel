import { Resource } from './../models/Resource';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url: string="http://localhost:3000/resources";
  constructor(private http:HttpClient) { }

  listarRecursos(){
    return this.http.get<Resource[]>(this.url);
  }
}
