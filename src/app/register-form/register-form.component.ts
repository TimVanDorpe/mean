import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router, private userService: UserService) { 

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
            this.router.navigate(['login-form']);
             alert("You registered user " + this.name + ". Verify your email to log in !");
             
    }
  reload() {
    window.location.reload();
  }

  ngOnInit() {
  }

}
