import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from '../../data.service';

import { UserService } from '../../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
//define an array for all the employeeees
  employees: Array<any>;
  name : string = '';
  age = 0;
  wage = 0;
  email : string = '';
  username : string;
  error:string;
  
myform : FormGroup;

  ngOnInit()
  {
    
  }

  constructor(private _dataService: DataService, private userService : UserService) {

      //get thee employees from de datasrvice ...:D
    this._dataService.getEmployees()
        .subscribe(res => {this.employees = res;});
    this.username = this. userService.getNameUserLoggedIn();
  }
   

    addEmployee(event){
        event.preventDefault();

        if(this.username == ''){
            alert("You have to log in before you can add an employee !")           
        }
        else{
        var newEmployee = {
            name: this.name,
            age : this.age,
            wage : this.wage,
            email : this.email, 
            user : this.username            
        }        
        this._dataService.addEmployee(newEmployee)
        .subscribe(employee => {
                this.employees.push(employee);
                this.name = '';
                this.age = 0 ;
                this.wage = 0;
                this.email = '';

            });
    }}
    reload() {
    window.location.reload();
  }

}
 