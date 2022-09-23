import { EmployeesService } from './../../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employeers-dialogo',
  templateUrl: './employeers-dialogo.component.html',
  styleUrls: ['./employeers-dialogo.component.css']
})
export class EmployeersDialogoComponent implements OnInit {

  constructor(private EmployeesService: EmployeesService,
    private dialogRef: MatDialogRef<EmployeersDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.EmployeesService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
