import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from '../data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent  {
 
   //define an array for all the employeeees
  employees: Array<any>; 

  name : string;
  age = 0;
  wage : 0;
  email : string;




  constructor(private _dataService: DataService) {

      //get thee employees from de datasrvice ...:D
    this._dataService.getEmployees()
        .subscribe(res => this.employees = res);   
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
    deleteEmployee(id){
        var employees = this.employees;
        
        this._dataService.deleteEmployee(id)
    .subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < employees.length;i++){
                    if(employees[i]._id == id){
                        employees.splice(i, 1);
                    }
                }
            }
        });
    }

}

