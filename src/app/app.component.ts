import { Component } from '@angular/core';

// Import the DataService & userService
import { DataService } from './data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Define a users property to hold our user data
  users: Array<any>;

  inventory: Array<any>;

  employees: Array<any>;

  tasks: Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService, private user : UserService) {

    // Access the Data Service's  method we defined
    this._dataService.getUsers()
        .subscribe(res => this.users = res);
    this._dataService.getInventory()
        .subscribe(res => this.inventory = res);
    this._dataService.getEmployees()
        .subscribe(res => this.employees = res);
    this._dataService.getTasks()
        .subscribe(res => this.tasks = res);
  }
   
}
