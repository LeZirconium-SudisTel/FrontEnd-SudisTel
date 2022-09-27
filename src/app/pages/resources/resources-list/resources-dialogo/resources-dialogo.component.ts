import { MatDialogRef } from '@angular/material/dialog';
import { ResourceService } from 'src/app/services/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-dialogo',
  templateUrl: './resources-dialogo.component.html',
  styleUrls: ['./resources-dialogo.component.css']
})
export class ResourcesDialogoComponent implements OnInit {

  constructor(private Rs: ResourceService,
    private dialogRef: MatDialogRef<ResourcesDialogoComponent>) { }

  ngOnInit(): void {}

  confirmar(estado: boolean) {
    this.Rs.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
