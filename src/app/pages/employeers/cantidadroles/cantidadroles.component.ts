import { EmployeesService } from './../../../services/employees.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { RespuestaEmployer } from 'src/app/models/RespuestaEmployer';
@Component({
  selector: 'app-cantidadroles',
  templateUrl: './cantidadroles.component.html',
  styleUrls: ['./cantidadroles.component.css']
})
export class CantidadrolesComponent implements OnInit {
  lista: RespuestaEmployer[]=[];
  dataSource: MatTableDataSource<RespuestaEmployer> = new MatTableDataSource();
  displayedColumns: string[] = ['role', 'cantidad'];
  constructor(private eS:EmployeesService) { }

  ngOnInit(): void {
    this.eS.listarCantidadRoles().subscribe(data=>{
      this.lista=data;
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
