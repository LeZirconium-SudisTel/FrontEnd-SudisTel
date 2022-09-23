import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeers',
  templateUrl: './employeers.component.html',
  styleUrls: ['./employeers.component.css'],
})
export class EmployeersComponent implements OnInit {
  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {}
}
