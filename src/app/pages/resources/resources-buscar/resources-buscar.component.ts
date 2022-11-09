import { Resource } from './../../../models/Resource';
import { ResourceService } from 'src/app/services/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-buscar',
  templateUrl: './resources-buscar.component.html',
  styleUrls: ['./resources-buscar.component.css']
})
export class ResourcesBuscarComponent implements OnInit {
  textoBuscar:string=""
  constructor(private rS:ResourceService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array: Resource[]=[];
    this.rS.listarRecursos().subscribe(data=>{
      data.forEach((element, index)=>{
        if (element.status.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.rS.setLista(array);
    })
  }
}
