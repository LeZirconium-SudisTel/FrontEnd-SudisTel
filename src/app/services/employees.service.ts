import { RespuestaEmployer } from './../models/RespuestaEmployer';
import { Employer } from './../models/Employer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = "http://localhost:8080/employers";
  private listaCambio=new Subject<Employer[]>()
  private confirmaEliminacion = new Subject<Boolean>()
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
    return this.http.put(this.url, employer);
  }
  listarId(id: number){
    return this.http.get<Employer>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Employer[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  buscardominio() {
    return this.http.get<Employer[]>(`${this.url}/buscardominio`);
  }
  listarCantidadRoles(){
    return this.http.get<RespuestaEmployer[]>(`${this.url}/cantidadroles`);
  }
}