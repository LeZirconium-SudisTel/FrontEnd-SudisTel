import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private Rs: ResourceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.resource.nameResource.length > 0 ) {
      if(this.edicion){
        this.Rs.modificar(this.resource).subscribe(data=>{
          this.Rs.listarRecursos().subscribe(data => {
            this.Rs.setLista(data);
          })
        })
      } else {
        this.Rs.insertar(this.resource).subscribe(data => {
          this.Rs.listarRecursos().subscribe(data => {
            this.Rs.setLista(data);
          })
        })
      }
      this.router.navigate(['resources']);
    } else {
      this.mensaje = "Completa los datos requeridos";
    }
  }

  init(){
    if (this.edicion){
    this.Rs.listarId(this.id).subscribe(data => {
      this.resource = data;
    })
  }
}
}
