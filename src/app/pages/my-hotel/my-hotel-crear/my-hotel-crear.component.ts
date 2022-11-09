import { Hotel } from 'src/app/models/Hotel';
import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-hotel-crear',
  templateUrl: './my-hotel-crear.component.html',
  styleUrls: ['./my-hotel-crear.component.css'],
})
export class MyHotelCrearComponent implements OnInit {
  hotel: Hotel = new Hotel();
  mensaje: string = '';
  constructor(private Hs: HotelService, private router: Router) {}

  ngOnInit(): void {}

  aceptar(): void {
    if (
      this.hotel.name.length > 0 &&
      this.hotel.number_of_stars.length > 0 &&
      this.hotel.average_price > 0 &&
      this.hotel.contact_number > 0 &&
      this.hotel.province.length > 0 &&
      this.hotel.address.length > 0
    ) {
      this.Hs.insertarHotel(this.hotel).subscribe((data) => {
        this.Hs.mostrarHotel().subscribe((data) => {
          this.Hs.setLista(data);
        });
      });
      this.router.navigate(['my-hotel']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }
}
