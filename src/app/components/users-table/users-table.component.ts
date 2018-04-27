import { UsersService } from './../../services/users-service/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  constructor(private service: UsersService) {}

  ngOnInit() {
    this.service.getAll();
  }

}
