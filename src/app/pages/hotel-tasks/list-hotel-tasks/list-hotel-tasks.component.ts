import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/models/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list-hotel-tasks',
  templateUrl: './list-hotel-tasks.component.html',
  styleUrls: ['./list-hotel-tasks.component.css']
})
export class ListHotelTasksComponent implements OnInit {
 
  dataSource: MatTableDataSource<Task> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name','employer','description','status','accion1'];
  constructor(private Ts:TasksService) {

  }

  ngOnInit(): void {
    this.Ts.ListarTareas().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    })
    this.Ts.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
