import { ReservationsTuristsDialogoComponent } from './reservations-turists-dialogo/reservations-turists-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservations-turists',
  templateUrl: './reservations-turists.component.html',
  styleUrls: ['./reservations-turists.component.css']
})
export class ReservationsTuristsComponent implements OnInit {

  dataSource: MatTableDataSource<Reservation> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'room_id',
    'check_in',
    'check_out',
    'room_price',
    'status',
    'credit_card',
    'actions'
  ];
  private idMayor: number = 0;
  constructor(private Rs: ReservationsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.Rs.mostrarReservas().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.Rs.getLista().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.Rs.getConfirmaEliminacion().subscribe((d) => {
      d == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ReservationsTuristsDialogoComponent);
  }
  eliminar(id: number) {
    this.Rs.eliminar(id).subscribe(() => {
      this.Rs.mostrarReservas().subscribe(d => {
        this.Rs.setLista(d);
      });
    });
  }
}
