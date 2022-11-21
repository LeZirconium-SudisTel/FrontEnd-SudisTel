import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'src/app/models/Room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css'],
})
export class ListRoomsComponent implements OnInit {
  dataSource: MatTableDataSource<Room> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'room_number',
    'is_available',
    'hotel',
    'acciones',
  ];
  constructor(private Rs: RoomsService) {}

  ngOnInit(): void {
    this.Rs.mostrarHabitaciones().subscribe((d) => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.Rs.getLista().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
