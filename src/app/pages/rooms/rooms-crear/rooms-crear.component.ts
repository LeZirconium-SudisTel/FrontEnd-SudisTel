import { Room } from './../../../models/Room';
import { RoomsService } from './../../../services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rooms-crear',
  templateUrl: './rooms-crear.component.html',
  styleUrls: ['./rooms-crear.component.css']
})
export class RoomsCrearComponent implements OnInit {
  room: Room = new Room();
  mensaje: string = "";
  edicion:boolean=false;
  id:number=0;
  constructor(private Rs: RoomsService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
  }

  aceptar(): void {
    if (this.room.numberRoom > 0 && this.room.availableRoom.length > 0) {
      if(this.edicion){
        this.Rs.modificar(this.room).subscribe(data=>{
          this.Rs.mostrarHabitaciones().subscribe(data=>{
            this.Rs.setLista(data);
          })
        })
      }else{
        this.Rs.Insertar(this.room).subscribe(data => {
          this.Rs.mostrarHabitaciones().subscribe(data => {
            this.Rs.setLista(data);
          })
        })
      }
      this.router.navigate(['rooms']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if (this.edicion) {
      this.Rs.listarId(this.id).subscribe(data => {
        this.room = data;
      })
    }
  }



}




