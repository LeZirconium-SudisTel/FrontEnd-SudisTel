import { TasksService } from 'src/app/services/tasks.service';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaHotelTasks } from './../../../models/RespuestaHotelTasks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-tasks-cantidadtarea',
  templateUrl: './hotel-tasks-cantidadtarea.component.html',
  styleUrls: ['./hotel-tasks-cantidadtarea.component.css']
})
export class HotelTasksCantidadtareaComponent implements OnInit {

  lista: RespuestaHotelTasks[] = [] ;
  dataSource: MatTableDataSource<RespuestaHotelTasks> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'cantidad'];
  constructor(private hS:TasksService) { }

  ngOnInit(): void { 
    this.hS.listarCantidadTareas().subscribe(data =>{
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
  })
  }
}
