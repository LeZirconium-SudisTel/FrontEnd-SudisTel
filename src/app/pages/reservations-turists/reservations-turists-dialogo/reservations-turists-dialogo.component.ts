import { MatDialogRef } from '@angular/material/dialog';
import { ReservationsService } from 'src/app/services/reservations.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-reservations-turists-dialogo',
  templateUrl: './reservations-turists-dialogo.component.html',
  styleUrls: ['./reservations-turists-dialogo.component.css']
})
export class ReservationsTuristsDialogoComponent implements OnInit {

  constructor(private rS: ReservationsService, private dialogRef: MatDialogRef<ReservationsTuristsDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean){
    this.rS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
