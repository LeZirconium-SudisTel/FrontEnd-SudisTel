import { EmployeesService } from './../../../services/employees.service';
import { Employer } from './../../../models/Employer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-employeers-crear',
  templateUrl: './employeers-crear.component.html',
  styleUrls: ['./employeers-crear.component.css']
})
export class EmployeersCrearComponent implements OnInit {
  employer:Employer=new Employer();
  mensaje: string="";
  edicion:boolean=false;
  id:number=0;
  
  constructor(private eS:EmployeesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
  }
  aceptar(): void {
    if (this.employer.first_name.length > 0 && this.employer.last_name.length > 0 && this.employer.email.length>0 && this.employer.photo.length>0) {
      if(this.edicion){
        this.eS.modificar(this.employer).subscribe(data=>{
          this.eS.listarEmpleados().subscribe(data=>{
            this.eS.setLista(data);
          })
        })
      }else{
        this.eS.insertar(this.employer).subscribe(data => {
          this.eS.listarEmpleados().subscribe(data => {
            this.eS.setLista(data);
          })
        })
      }
      this.router.navigate(['employeers']);
    } else {
      this.mensaje = "Completa los datos requeridos";
    }
  }
  init(){
    if (this.edicion) {
      this.eS.listarId(this.id).subscribe(data => {
        this.employer = data;
      })
    }
  }
}
