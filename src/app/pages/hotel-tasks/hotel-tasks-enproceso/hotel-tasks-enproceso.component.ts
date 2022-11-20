import { Task } from './../../../models/Task';
import { TasksService } from 'src/app/services/tasks.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotel-tasks-enproceso',
  templateUrl: './hotel-tasks-enproceso.component.html',
  styleUrls: ['./hotel-tasks-enproceso.component.css']
})
export class HotelTasksEnprocesoComponent implements OnInit {
  dataSource: MatTableDataSource<Task> = new MatTableDataSource();
  displayedColumns: string[] = ['id','employer','name','description','status'];
  constructor(private tS:TasksService) { }

  ngOnInit(): void {
    this.tS.listarEnProceso().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
  })
  }

}
