import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) {
   }

  getAll(){
    this.http.get(this.url)
    .subscribe(data => {
        console.log(data.json());
    });
  }
}
