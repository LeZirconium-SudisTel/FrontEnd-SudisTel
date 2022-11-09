import { Employer } from './../../../models/Employer';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from './../../../models/Task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-hotel-tasks-crear',
  templateUrl: './hotel-tasks-crear.component.html',
  styleUrls: ['./hotel-tasks-crear.component.css']
})

export class HotelTasksCrearComponent implements OnInit {
  task: Task = new Task();
  listaEmployers: Employer[] = [];
  idEmployerSeleccionado: number = 0;
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private tS: TasksService,private eS:EmployeesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.eS.listarEmpleados().subscribe((data) => {
      this.listaEmployers = data;
    });
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.task.name.length > 0 && this.task.description.length > 0) {
      let e = new Employer();
      e.idEmployer = this.idEmployerSeleccionado;
      this.task.employer = e;

      if(this.edicion){
        this.tS.modificar(this.task).subscribe(data=>{
          this.tS.ListarTareas().subscribe(data => {
            this.tS.setLista(data);
        })
    
      })
    } else {
      this.tS.insertar(this.task).subscribe(data => {
        this.tS.ListarTareas().subscribe(data => {
          this.tS.setLista(data);
        })
      })
    }
      this.router.navigate(['hotel-tasks']);
    } else {
      this.mensaje = "Completa los datos requeridos";
    }
  }
  
  init(){
    if (this.edicion) {
      this.tS.listarId(this.id).subscribe(data => {
        this.task = data;
        this.idEmployerSeleccionado = data.employer.idEmployer;
  })
}}
}

