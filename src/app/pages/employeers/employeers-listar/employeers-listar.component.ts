import { Employer } from './../../../models/Employer';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
    'photo'
  ];
  constructor(public Es: EmployeesService) {}

  ngOnInit(): void {
    this.Es.listarEmpleados().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
  }
}
