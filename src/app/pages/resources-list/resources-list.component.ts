import { ResourceService } from './../../services/resource.service';
import { Resource } from './../../models/Resource';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  dataSource: MatTableDataSource<Resource> = new MatTableDataSource();
  displayedColumns: string[]=['id','resoruce_name', 'resoruce_type', 'stock'];
  constructor(private Rs: ResourceService) { }

  ngOnInit(): void {
    this.Rs.listarRecursos().subscribe( d =>{
      this.dataSource = new MatTableDataSource(d)
    })
  }

}
