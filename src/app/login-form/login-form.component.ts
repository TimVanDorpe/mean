import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  users: Array<any>;

  constructor(private router:Router, private userService:UserService , private _dataService : DataService) {
       this._dataService.getUsers()
        .subscribe(res => this.users = res);


   }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
        var c = 0;
    
  	for(var i = 0;i < this.users.length;i++){
       
  	if(username == this.users[i].name && password == this.users[i].pass) 
    {
      this.userService.setUserLoggedIn(username);  		
     // alert("You are now logged in as user " + username)
     c++;
      	this.router.navigate(['employee']);
  	}
    }
    if( c == 0)
    alert("The combination is incorrect, please try again !");
    else{
      alert("You are now logged in as " + username);
    }
    
  }

}
