import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  inventory: Array<any>;

  constructor(private _dataService: DataService) { 
 this._dataService.getInventory()
        .subscribe(res => this.inventory = res);

  }

  ngOnInit() {
  }

}
