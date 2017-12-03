import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from '../../data.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
//define an array for all the employeeees
  employees: Array<any>;
  name : string;
  age = 0;
  wage : 0;
  email : string;
  
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

  constructor(private _dataService: DataService) {

      //get thee employees from de datasrvice ...:D
    this._dataService.getEmployees()
        .subscribe(res => {this.employees = res;});
  }
   

    addEmployee(event){
        event.preventDefault();
        var newEmployee = {
            name: this.name,
            age : this.age,
            wage : this.wage,
            email : this.email
            
        }
        
        this._dataService.addEmployee(newEmployee)
            .subscribe(employee => {
                this.employees.push(employee);
                this.name = '';
            });
    }
    reload() {
    window.location.reload();
  }

}
 