import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/Room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms-cantidad-hoteles',
  templateUrl: './rooms-cantidad-hoteles.component.html',
  styleUrls: ['./rooms-cantidad-hoteles.component.css']
})
export class RoomsCantidadHotelesComponent implements OnInit {
    dataSource: MatTableDataSource<Room> = new MatTableDataSource();
    displayedColumns : string[] = ['id_room', 'number_room', 'disponible', 'id_hotel'];
    constructor(private rS:RoomsService) { }
   
     ngOnInit(): void {
       this.rS.buscarEstado().subscribe(data=>{
       this.dataSource=new MatTableDataSource(data);
       })
     }

}
