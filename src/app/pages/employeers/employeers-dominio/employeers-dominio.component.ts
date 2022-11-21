import { Employer } from './../../../models/Employer';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-employeers-dominio',
  templateUrl: './employeers-dominio.component.html',
  styleUrls: ['./employeers-dominio.component.css']
})
export class EmployeersDominioComponent implements OnInit {
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
  constructor(public Es: EmployeesService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Es.buscardominio().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
