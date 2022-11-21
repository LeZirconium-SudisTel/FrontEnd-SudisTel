import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels-precio',
  templateUrl: './hotels-precio.component.html',
  styleUrls: ['./hotels-precio.component.css']
})
export class HotelsPrecioComponent implements OnInit {
  dataSource: MatTableDataSource<Hotel> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'number_of_stars', 'average_price', 'contact_number', 'province', 'address'];
  constructor(private Hs: HotelService) { }

  ngOnInit(): void {
    this.Hs.buscarMayorPrecio().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
