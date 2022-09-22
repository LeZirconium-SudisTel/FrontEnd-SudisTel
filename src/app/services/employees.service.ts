import { Employer } from './../models/Employer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = "http://localhost:3000/employees";
  private listaCambio=new Subject<Employer[]>()
  constructor(private http: HttpClient) { }

  listarEmpleados() {
    return this.http.get<Employer[]>(this.url);
  }
  insertar(employer:Employer){
    return this.http.post(this.url,employer);
  }
  setLista(listaNueva:Employer[]){
    return this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(employer: Employer) {
    return this.http.put(this.url + "/" + employer.id, employer);
  }
  listarId(id: number){
    return this.http.get<Employer>(`${this.url}/${id}`);
  }
}