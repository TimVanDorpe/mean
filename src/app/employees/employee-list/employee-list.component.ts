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

   

  ngOnInit() {
  }

}
