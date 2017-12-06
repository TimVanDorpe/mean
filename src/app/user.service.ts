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
  addUser(newUser){
        console.log("add new user" + newUser);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/users', JSON.stringify(newUser), {headers: headers})
        .map(res => res.json());
    }


  setUserLoggedIn(name) {
  	this.isUserLoggedIn = true;
    this.username = name;
  }
  getNameUserLoggedIn()
  {
    return this.username;
  }
  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

}