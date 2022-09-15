import { Employer } from './../models/Employer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = "http://localhost:3000/employees"
  constructor(private http: HttpClient) { }

  mostrarEmpleado() {
    return this.http.get<Employer[]>(this.url);
  }
}