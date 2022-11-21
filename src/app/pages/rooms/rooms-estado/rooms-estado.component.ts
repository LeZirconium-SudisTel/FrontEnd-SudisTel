import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { CountRooms } from 'src/app/models/CountRooms';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms-estado',
  templateUrl: './rooms-estado.component.html',
  styleUrls: ['./rooms-estado.component.css']
})
export class RoomsEstadoComponent implements OnInit {

    dataSource: MatTableDataSource<CountRooms> = new MatTableDataSource();
    displayedColumns: string[] = ['hotel', 'cantidad',];
    constructor(private rS: RoomsService  ) { }
  
    ngOnInit(): void {
      this.rS.buscarCantidad().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      })
    }
  }
  
