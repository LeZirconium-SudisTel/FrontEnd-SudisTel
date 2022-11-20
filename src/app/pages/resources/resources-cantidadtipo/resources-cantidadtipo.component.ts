import { ResourceService } from 'src/app/services/resource.service';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaResource } from './../../../models/RespuestaResource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-cantidadtipo',
  templateUrl: './resources-cantidadtipo.component.html',
  styleUrls: ['./resources-cantidadtipo.component.css']
})
export class ResourcesCantidadtipoComponent implements OnInit {
lista: RespuestaResource[]=[];
dataSource: MatTableDataSource<RespuestaResource> = new MatTableDataSource();
  displayedColumns: string[] = ['tipo', 'cantidad'];
  constructor(private rS: ResourceService) { }

  ngOnInit(): void {
    this.rS.listarCantidadTipo().subscribe(data =>{
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
  })
  }
}
