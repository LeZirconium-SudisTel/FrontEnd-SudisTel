import { Reservation } from './../../models/Reservation';
import { ReservationsService } from './../../services/reservations.service';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  dataSource: MatTableDataSource<Reservation> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'user', 'hotel', 'room', 'reservation_date', 'room_price', 'status'];
  constructor(private Rs: ReservationsService) {}


  ngOnInit(): void {
    this.Rs.mostrarReservas().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
  });
}
}
