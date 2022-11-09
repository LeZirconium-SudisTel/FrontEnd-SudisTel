import { CreditCardDialogoComponent } from './credit-card-dialogo/credit-card-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { CreditcardService } from './../../../services/creditcard.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CreditCard } from 'src/app/models/CreditCard';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {
  dataSource: MatTableDataSource<CreditCard> =new MatTableDataSource();
  displayedColumns: string[]=['id','number','ccv','expiredate', 'accion1']
  private idMayor: number = 0;
  constructor(private Cs:CreditcardService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Cs.listarCreditCards().subscribe((d)=>{
      this.dataSource = new MatTableDataSource(d)
    })
    this.Cs.getLista().subscribe((d)=>{
      this.dataSource= new MatTableDataSource(d);
    });
    this.Cs.getConfirmaEliminacion().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor): false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CreditCardDialogoComponent);
  }
  eliminar(id: number) {
    this.Cs.eliminar(id).subscribe(() => {
      this.Cs.listarCreditCards().subscribe(data => {
        this.Cs.setLista(data);
      });
    });
  }
}
