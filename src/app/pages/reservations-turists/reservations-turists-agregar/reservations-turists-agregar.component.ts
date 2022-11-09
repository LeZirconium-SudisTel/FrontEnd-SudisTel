import { CreditcardService } from './../../../services/creditcard.service';
import { Room } from 'src/app/models/Room';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsService } from 'src/app/services/reservations.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { CreditCard } from 'src/app/models/CreditCard';

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
  listaTarjetas: CreditCard[] = [];
  idTarjetaSeleccionada: number = 0;

  constructor(
    private ReS: ReservationsService,
    private RoS: RoomsService,
    private cR: CreditcardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.RoS.mostrarHabitaciones().subscribe((data) => {
      this.listaHabitaciones = data;
    });
    this.cR.listarCreditCards().subscribe((data) => {
      this.listaTarjetas = data;
    });
  }

  crear(): void {
    let r = new Room();
    r.idRoom = this.idHabitacionSeleccionada;
    this.reservation.room = r;

    let c = new CreditCard();
    c.idCreditCard = this.idTarjetaSeleccionada;
    this.reservation.credit_card = c;

    this.ReS.crearReserva(this.reservation).subscribe(() => {
      this.ReS.mostrarReservas().subscribe((data) => {
        this.ReS.setLista(data);
      });
    })
    this.router.navigate(['reservations-turists']);
    console.log(this.reservation);

  }

}
