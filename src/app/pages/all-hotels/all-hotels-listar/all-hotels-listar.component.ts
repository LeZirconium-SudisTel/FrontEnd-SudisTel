import { HotelService } from './../../../services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from 'src/app/models/Hotel';

@Component({
  selector: 'app-all-hotels-listar',
  templateUrl: './all-hotels-listar.component.html',
  styleUrls: ['./all-hotels-listar.component.css']
})
export class AllHotelsListarComponent implements OnInit {
  dataSource: MatTableDataSource<Hotel> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'number_of_stars', 'average_price', 'contact_number', 'province', 'address', 'acciones'];
  constructor(private Hs: HotelService) { }

  ngOnInit(): void {
    this.Hs.mostrarHotel().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.Hs.getLista().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
  }

}
