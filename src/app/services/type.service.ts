import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Type } from './../models/Type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TypeService {
  url: string = "http://localhost:8080/types";
  private listaCambio=new Subject<Type[]>()
  private confimaInsertar = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listarTypes(){
    return this.http.get<Type[]>(this.url);
  }
  insertar(type:Type){
    return this.http.post(this.url,type);
  }
  setLista(listaNueva:Type[]){
    return this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  getConfirmaInsertar(){
    return this.confimaInsertar.asObservable();
  }
  setConfirmaInsertar(estado: boolean){
    this.confimaInsertar.next(estado);
  }
  listarId(id:number){
    return this.http.get<Type>(`${this.url}/${id}`);
  }
}
