import { Employer } from './../../../models/Employer';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeers-buscar',
  templateUrl: './employeers-buscar.component.html',
  styleUrls: ['./employeers-buscar.component.css']
})
export class EmployeersBuscarComponent implements OnInit {
  textoBuscar:string=""
  constructor(private EmployeesService:EmployeesService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Employer[] = [];
    this.EmployeesService.listarEmpleados().subscribe(data => {
      data.forEach((element, index) => {
        if (element.first_nameEmployer.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.EmployeesService.setLista(array);
    })
  }
}
