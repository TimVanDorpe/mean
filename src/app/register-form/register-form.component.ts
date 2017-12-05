import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

users : Array<any>;

name:String;
pass:String;
email:String;

  constructor(private userService: UserService) { 

    this.userService.getUsers()
        .subscribe(res => {this.users = res;});
  }
  

  addUser(event){        
        event.preventDefault();
        var newUser = {
            name: this.name,
            pass : this.pass,
            email : this.email           
        }        
        this.userService.addUser(newUser)
            .subscribe(user => {
                this.users.push(user);
                this.name = '';                
                this.email ='';
                this.pass = '';
            });
    }
    reload() {
    window.location.reload();
  }

  ngOnInit() {
  }

}
