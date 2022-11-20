import { Resource } from './../models/Resource';
import { RespuestaResource } from './../models/RespuestaResource';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url: string = "http://localhost:8080/resources";
  private listaCambio = new Subject<Resource[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listarRecursos() {
    return this.http.get<Resource[]>(this.url);
  }

  insertar(resource: Resource) {
    return this.http.post(this.url, resource);
  }

  setLista(listaNueva: Resource[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(resource: Resource) {
    return this.http.put(this.url, resource);
  }

  listarId(id: number){
    return this.http.get<Resource>(`${this.url}/${id}`);
  }
  eliminar(id: number){
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
      return this.http.post<Resource[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  listaSinStock(){
    return this.http.get<Resource[]>(`${this.url}/sinstock`)
  }
  listarCantidadTipo() {
    return this.http.get<RespuestaResource[]>(`${this.url}/cantidadtipo`);
  }
}
