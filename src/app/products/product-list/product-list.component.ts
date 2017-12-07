import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from '../../data.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<any>;
  productsCU : Array<any> = [];
  
  ngOnInit() {
  }

  constructor(private _dataService: DataService , private userService: UserService) { 
     this._dataService.getInventory()
        .subscribe((res) => {
        this.products = res;
        console.log(this.products);
        for(var i = 0;i < this.products.length;i++){
                    if(this.products[i].user == userService.getNameUserLoggedIn())
                    {
                        this.productsCU.push(this.products[i]);
                    }
                }
        });     
       console.log(userService.getNameUserLoggedIn());
       console.log(this.productsCU);
      
  }
   deleteProduct(id){
        var products = this.products;        
        this._dataService.deleteProduct(id)
        .subscribe(data => {            
                for(var i = 0;i < products.length;i++){
                    if(products[i]._id == id){
                        this.products.splice(i, 1);
                    }
                }            
        });
         window.location.reload();
    } 
}
