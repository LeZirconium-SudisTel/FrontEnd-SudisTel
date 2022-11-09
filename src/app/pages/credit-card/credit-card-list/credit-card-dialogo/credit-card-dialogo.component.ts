import { MatDialogRef } from '@angular/material/dialog';
import { CreditcardService } from '../../../../services/creditcard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-dialogo',
  templateUrl: './credit-card-dialogo.component.html',
  styleUrls: ['./credit-card-dialogo.component.css']
})
export class CreditCardDialogoComponent implements OnInit {

  constructor(private cS: CreditcardService,
    private dialogRef: MatDialogRef<CreditCardDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.cS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
