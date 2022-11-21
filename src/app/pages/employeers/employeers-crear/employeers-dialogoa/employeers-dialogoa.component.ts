import { Route, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/Role';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeers-dialogoa',
  templateUrl: './employeers-dialogoa.component.html',
  styleUrls: ['./employeers-dialogoa.component.css']
})
export class EmployeersDialogoaComponent implements OnInit {
role:Role = new Role();
  constructor(private rS: RoleService,private router: Router,
    private dialogRef: MatDialogRef<EmployeersDialogoaComponent>) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    this.rS.insertar(this.role).subscribe(data => {
      this.rS.listarRoles().subscribe(data => {
        this.rS.setLista(data);
      })
    })
    this.dialogRef.close();
    this.router.navigate(['add-employer']);
  }
  cancelar(): void{
    this.dialogRef.close();
  }
}
