import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsService } from 'src/app/services/reservations.service';



@Component({
  selector: 'app-reservations-turists',
  templateUrl: './reservations-turists.component.html',
  styleUrls: ['./reservations-turists.component.css']
})
export class ReservationsTuristsComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}

}