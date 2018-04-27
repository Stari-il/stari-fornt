import { DataService } from './../data-service/data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService extends DataService {
  
  constructor(http: Http) { 
    super("./assets/users-data/final.json", http);
  }

}
