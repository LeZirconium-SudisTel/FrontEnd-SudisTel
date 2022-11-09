import { Subject } from 'rxjs';
import { CreditCard } from './../models/CreditCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {
  url: string = "http://localhost:8080/CreditCard"
  private confirmaEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<CreditCard[]>()
  constructor(private http:HttpClient) { }

  listarCreditCards() {
    return this.http.get<CreditCard[]>(this.url);
  }
  insertar(type:CreditCard){
    return this.http.post(this.url,type);
  }
  listarId(id:number){
    return this.http.get<CreditCard>(`${this.url}/${id}`);
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
  setLista(listaNueva: CreditCard[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
