import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Resource } from 'src/app/models/Resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resources-crear',
  templateUrl: './resources-crear.component.html',
  styleUrls: ['./resources-crear.component.css']
})

export class ResourcesCrearComponent implements OnInit {
  resource: Resource = new Resource();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private rS: ResourceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.resource.resoruce_name.length > 0 && this.resource.resoruce_type.length > 0) {
      if(this.edicion){
        this.rS.modificar(this.resource).subscribe(data=>{
          
        })
      }
      this.rS.insertar(this.resource).subscribe(data => {
        this.rS.listarRecursos().subscribe(data => {
          this.rS.setLista(data);
        })
      })
      this.router.navigate(['resources']);
    } else {
      this.mensaje = "Completa los datos requeridos";
    }
  }

  init(){}
}
