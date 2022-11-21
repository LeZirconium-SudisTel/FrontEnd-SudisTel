import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { RespuestaReservacion } from 'src/app/models/RespuestaReservacion';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservations-cantidad-tarjetas',
  templateUrl: './reservations-cantidad-tarjetas.component.html',
  styleUrls: ['./reservations-cantidad-tarjetas.component.css']
})
export class ReservationsCantidadTarjetasComponent implements OnInit {
  lista: RespuestaReservacion[]=[];
  dataSource: MatTableDataSource<RespuestaReservacion> = new MatTableDataSource();
  displayedColumns: string[] = ['tarjeta', 'cantidad'];

  constructor(private rS: ReservationsService) { }

  ngOnInit(): void {
    this.rS.listarCantidadTarjetas().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
