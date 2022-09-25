import { ResourcesDialogoComponent } from './resources-dialogo/resources-dialogo.component';
import { ResourceService } from '../../../services/resource.service';
import { Resource } from '../../../models/Resource';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  dataSource: MatTableDataSource<Resource> = new MatTableDataSource();
  displayedColumns: string[]=['id', 'name', 'type', 'stock' , 'status' ,'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private Rs: ResourceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Rs.listarRecursos().subscribe( (d) =>{
      this.dataSource = new MatTableDataSource(d)
    })
    this.Rs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Rs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ResourcesDialogoComponent);
  }

  eliminar(id: number) {
    this.Rs.eliminar(id).subscribe(() => {
      this.Rs.listarRecursos().subscribe(data => {
        this.Rs.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }
}
