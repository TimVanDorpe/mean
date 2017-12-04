import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public username;
  result:any;

  constructor(private _http: Http) { 
  	this.isUserLoggedIn = false;
  }
   getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }
  


  setUserLoggedIn(name) {
  	this.isUserLoggedIn = true;
    this.username = name;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

}