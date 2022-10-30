import { Room } from 'src/app/models/Room';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsService } from 'src/app/services/reservations.service';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-reservations-turists-agregar',
  templateUrl: './reservations-turists-agregar.component.html',
  styleUrls: ['./reservations-turists-agregar.component.css'],
})
export class ReservationsTuristsAgregarComponent implements OnInit {
  reservation: Reservation = new Reservation();
  mensaje: string = '';
  listaHabitaciones: Room[] = [];
  idHabitacionSeleccionada: number = 0;

  constructor(
    private ReS: ReservationsService,
    private RoS: RoomsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.RoS.mostrarHabitaciones().subscribe((data) => {
      this.listaHabitaciones = data;
    });
  }

  crear(): void {
    if (
      this.reservation.check_in.length > 0 &&
      this.reservation.check_out.length > 0 &&
      this.reservation.room_price > 0 &&
      this.reservation.status.length > 0 &&
      this.idHabitacionSeleccionada > 0
    ) {
      let r = new Room();
      r.idRoom = this.idHabitacionSeleccionada;
      this.reservation.room = r;

      this.ReS.crearReserva(this.reservation).subscribe(() => {
        this.ReS.mostrarReservas().subscribe((data) => {
          this.ReS.setLista(data);
        });
      })
      this.router.navigate(['reservations-turists']);
      console.log('Agregado');
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }
}
