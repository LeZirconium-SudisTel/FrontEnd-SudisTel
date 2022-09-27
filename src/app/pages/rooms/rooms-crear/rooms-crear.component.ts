import { Room } from './../../../models/Room';
import { RoomsService } from './../../../services/rooms.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';





@Component({
  selector: 'app-rooms-crear',
  templateUrl: './rooms-crear.component.html',
  styleUrls: ['./rooms-crear.component.css']
})
export class RoomsCrearComponent implements OnInit {
  room:Room=new Room();
  mensaje: string = "";
  constructor(private Rs: RoomsService, private router: Router) { }

  ngOnInit(): void {

  }

    aceptar(): void {
      if (this.room.number.length > 0 && this.room.is_available.length > 0) {

        this.Rs.Insertar(this.room).subscribe(data => {
          this.Rs.mostrarHabitaciones().subscribe(data => {
            this.Rs.setLista(data);
          })
        })
        this.router.navigate(['rooms']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }
  
 
}

  
  

