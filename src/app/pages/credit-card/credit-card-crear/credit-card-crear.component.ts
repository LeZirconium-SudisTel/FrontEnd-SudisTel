import { Router, ActivatedRoute, Params } from '@angular/router';
import { CreditcardService } from './../../../services/creditcard.service';
import { CreditCard } from 'src/app/models/CreditCard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-crear',
  templateUrl: './credit-card-crear.component.html',
  styleUrls: ['./credit-card-crear.component.css']
})
export class CreditCardCrearComponent implements OnInit {
  creditCard: CreditCard = new CreditCard();
  mensaje: string = "";
  id: number = 0;
  constructor(private Cs:CreditcardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.init();
    });
  }
  aceptar(): void {
    if (this.creditCard.numberCard > 0) {
      {
        this.Cs.insertar(this.creditCard).subscribe(data => {
          this.Cs.listarCreditCards().subscribe(data => {
            this.Cs.setLista(data);
          })
        })
      }
      this.router.navigate(['credit-cards']);
    } else {
      this.mensaje = "Completa los datos requeridos";
    }
  }

  init(){
    this.Cs.listarId(this.id).subscribe(data => {
    this.creditCard = data;
    console.log(data);
    })
  }
}
