import { EmployeersDialogoComponent } from './employeers-dialogo/employeers-dialogo.component';
import { Employer } from './../../../models/Employer';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employeers-listar',
  templateUrl: './employeers-listar.component.html',
  styleUrls: ['./employeers-listar.component.css']
})
export class EmployeersListarComponent implements OnInit {
  dataSource: MatTableDataSource<Employer> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'email',
    'role',
    'first_name',
    'last_name',
    'phone_number',
    'dni',
    'photo',
    'accion1',
    'accion2'
  ];
  private idMayor: number = 0;
  constructor(public Es: EmployeesService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.Es.listarEmpleados().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.Es.getLista().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.Es.getConfirmaEliminacion().subscribe((d) => {
      d == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EmployeersDialogoComponent);
  }
  eliminar(id: number) {
    this.Es.eliminar(id).subscribe(() => {
      this.Es.listarEmpleados().subscribe(d => {
        this.Es.setLista(d);/* se ejecuta la línea 27*/
      });
    });
  }
}
