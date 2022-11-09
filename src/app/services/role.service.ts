import { Role } from './../models/Role';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url: string = "http://localhost:8080/roles";
  private listaCambio=new Subject<Role[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { 
  }
  listarRoles() {
    return this.http.get<Role[]>(this.url);
  }
  insertar(role:Role){
    return this.http.post(this.url,role);
  }
  setLista(listaNueva:Role[]){
    return this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listarId(id: number){
    return this.http.get<Role>(`${this.url}/${id}`);
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
}
