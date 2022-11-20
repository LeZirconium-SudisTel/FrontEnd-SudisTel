import { TasksService } from 'src/app/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-hotel-tasks-buscar',
  templateUrl: './hotel-tasks-buscar.component.html',
  styleUrls: ['./hotel-tasks-buscar.component.css']
})
export class HotelTasksBuscarComponent implements OnInit {
  textoBuscar:string=""
  constructor(private tS:TasksService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Task[] = [];
    this.tS.ListarTareas().subscribe(data => {
      data.forEach((element, index) => {
        if (element.status.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.tS.setLista(array);
    })
  }
}
