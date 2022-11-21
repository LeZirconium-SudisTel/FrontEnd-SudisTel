import { Type } from './../../../../models/Type';
import { MatDialogRef } from '@angular/material/dialog';
import { TypeService } from './../../../../services/type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-dialogoa',
  templateUrl: './resources-dialogoa.component.html',
  styleUrls: ['./resources-dialogoa.component.css']
})
export class ResourcesDialogoaComponent implements OnInit {
  type: Type = new Type ();
  constructor(private tS:TypeService,
    private dialogRef: MatDialogRef<ResourcesDialogoaComponent>) { }

  ngOnInit(): void {
  }

  aceptar(): void {
    this.tS.insertar(this.type).subscribe(data => {
      this.tS.listarTypes().subscribe(data => {
        this.tS.setLista(data);
      })
    })
    this.dialogRef.close();
  }
  cancelar(): void{
    this.dialogRef.close();
  }
}