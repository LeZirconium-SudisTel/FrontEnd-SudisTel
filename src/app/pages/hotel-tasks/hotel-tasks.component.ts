import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-tasks',
  templateUrl: './hotel-tasks.component.html',
  styleUrls: ['./hotel-tasks.component.css']
})
export class HotelTasksComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
