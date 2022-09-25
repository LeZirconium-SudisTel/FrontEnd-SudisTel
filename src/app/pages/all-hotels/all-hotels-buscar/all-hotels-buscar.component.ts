import { Hotel } from './../../../models/Hotel';
import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-all-hotels-buscar',
  templateUrl: './all-hotels-buscar.component.html',
  styleUrls: ['./all-hotels-buscar.component.css']
})
export class AllHotelsBuscarComponent implements OnInit {
  textoBuscar:string=""
  constructor(private Hs: HotelService) { }
  ngOnInit(): void {
  }

  buscarHotel(e: any){
    let array: Hotel[]=[];
    this.Hs.mostrarHotel().subscribe(data=>{
      data.forEach((element, index)=>{
        if(element.province.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.Hs.setLista(array);
    })
  }
}
