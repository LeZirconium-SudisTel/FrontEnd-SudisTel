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
    'actions'
  ];
  constructor(private Rs: ReservationsService) {}

  ngOnInit(): void {
    this.Rs.mostrarReservas().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.Rs.getLista().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
  }
}
