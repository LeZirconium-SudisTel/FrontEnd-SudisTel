import { Room } from './../../../models/Room';
import { RoomsService } from 'src/app/services/rooms.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rooms-busqueda',
  templateUrl: './rooms-busqueda.component.html',
  styleUrls: ['./rooms-busqueda.component.css']
})
export class RoomsBusquedaComponent implements OnInit {
  textoBuscar: string = ""
  Room:Room=new Room();
  constructor(private RoomsService: RoomsService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Room[] = [];
    this.RoomsService.mostrarHabitaciones().subscribe(data => {
      data.forEach((element, index) => {
        if (element.availableRoom.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.RoomsService.setLista(array);
    })
  }

}
