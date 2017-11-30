import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from '../../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  //define an array for all the employeeees
  employees: Array<any>;


  constructor(private _dataService: DataService) {

    //get thee employees from de datasrvice ...:D
    this._dataService.getEmployees()
        .subscribe(res => this.employees = res);
   }
    deleteTask(id){
        var employees = this.employees;
        
        this._dataService.deleteEmployee(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < employees.length;i++){
                    if(employees[i]._id == id){
                        employees.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateEmployee(employee){
        var _employee = {
            _id:employee._id,
            name: employee.name,
            age: employee.age,
            email: employee.email,
            wage:employee.wage           
            
        };
        
        this._dataService.updateEmployee(_employee);
    }

   

  ngOnInit() {
  }

}
