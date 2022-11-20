import { ResourceService } from 'src/app/services/resource.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/Resource';

@Component({
  selector: 'app-resources-sinstock',
  templateUrl: './resources-sinstock.component.html',
  styleUrls: ['./resources-sinstock.component.css']
})
export class ResourcesSinstockComponent implements OnInit {
  dataSource: MatTableDataSource<Resource> = new MatTableDataSource();
  displayedColumns: string []=['id', 'name', 'type', 'stock' , 'status']
  constructor(private Rs: ResourceService) { }

  ngOnInit(): void {
    this.Rs.listaSinStock().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
