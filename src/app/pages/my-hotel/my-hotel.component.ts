import { Hotel } from './../../models/Hotel';
import { MatTableDataSource } from '@angular/material/table';
import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-hotel',
  templateUrl: './my-hotel.component.html',
  styleUrls: ['./my-hotel.component.css'],
})
export class MyHotelComponent implements OnInit {
  dataSource: MatTableDataSource<Hotel> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'number_of_stars', 'average_price', 'contact_number', 'province', 'address'];
  constructor(private Hs: HotelService) {}

  ngOnInit(): void {
    this.Hs.mostrarHotel().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
  }
}
