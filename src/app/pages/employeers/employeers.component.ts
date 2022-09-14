import { EmployeesService } from './../../services/employees.service';
import { Employer } from './../../models/Employer';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeers',
  templateUrl: './employeers.component.html',
  styleUrls: ['./employeers.component.css'],
})
export class EmployeersComponent implements OnInit {
  dataSource: MatTableDataSource<Employer> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'hotel',
    'first_name',
    'last_name',
    'dni',
    'email',
    'photo',
    'role',
  ];
  constructor(public Es: EmployeesService) {}

  ngOnInit(): void {
    this.Es.mostrarEmpleado().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
  }
}
