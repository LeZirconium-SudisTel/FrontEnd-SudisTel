import { MatDialog } from '@angular/material/dialog';
import { EmployeersDialogoaComponent } from './employeers-dialogoa/employeers-dialogoa.component';
import { EmployeesService } from './../../../services/employees.service';
import { Employer } from './../../../models/Employer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-employeers-crear',
  templateUrl: './employeers-crear.component.html',
  styleUrls: ['./employeers-crear.component.css']
})
export class EmployeersCrearComponent implements OnInit {
  employer: Employer = new Employer();
  listaRoles: Role[] = [];
  idRoleSeleccionado: number = 0;
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private eS: EmployeesService, private rS: RoleService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.rS.listarRoles().subscribe((data) => {
      this.listaRoles = data;
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
  }
  aceptar(): void {

    if (this.employer.first_nameEmployer.length > 0 && this.employer.last_nameEmployer.length > 0 && this.employer.emailEmployer.length > 0 && this.employer.photoEmployer.length > 0) {
      let r = new Role();
      r.idRole = this.idRoleSeleccionado;
      this.employer.role = r;
      if (this.edicion) {
        this.eS.modificar(this.employer).subscribe(data => {
          this.eS.listarEmpleados().subscribe(data => {
            this.eS.setLista(data);
          })
        })
      } else {
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
  init() {
    if (this.edicion) {
      this.eS.listarId(this.id).subscribe(data => {
        this.employer = data;
        this.idRoleSeleccionado = data.role.idRole;
      })
    }
  }
  confirmar() {
    this.dialog.open(EmployeersDialogoaComponent);
  }
}
