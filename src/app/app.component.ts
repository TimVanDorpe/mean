import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

// Import the DataService & userService
import { DataService } from './data.service';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myform : FormGroup;

  ngOnInit()
  {
    this.myform = new FormGroup({
        name: new FormGroup({
            name: new FormControl('', Validators.required)
            
        }),
        email: new FormControl('', [ 
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*") 
        ]),
        age: new FormControl('', [
            Validators.min(16), 
            Validators.required
        ]),
        wage: new FormControl('', [
            Validators.min(1200), 
            Validators.required
        ]) 
    });
  }


  
  // Define a users property to hold our user data
  users: Array<any>;

  inventory: Array<any>;

  employees: Array<any>;

  tasks: Array<any>;
  
  loggedIn : boolean;

  userName : String;

  userService : UserService;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService, private user : UserService) {

    // Access the Data Service's  method we defined
    this._dataService.getUsers()
        .subscribe(res => this.users = res);
    this.userService = this.user;
    this.loggedIn = this.user.getUserLoggedIn();
    this.userName = this.user.getNameUserLoggedIn();
    console.log(this.loggedIn);
    this._dataService.getInventory()
        .subscribe(res => this.inventory = res);
    this._dataService.getEmployees()
        .subscribe(res => this.employees = res);
    this._dataService.getTasks()
        .subscribe(res => this.tasks = res);
  
  }
  logout(){
      this.userService.logout();
      
  }
   
}
