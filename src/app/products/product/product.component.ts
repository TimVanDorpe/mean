import { Component, OnInit } from '@angular/core';

import {DataService} from '../../data.service'

import {UserService} from '../../user.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products : Array<any>;
 username : String;

name:String;
price:0;
color:String;
place:String;

  constructor(private _dataService: DataService, private userService: UserService) { 
   
 //get the products from de dataservice
    this._dataService.getInventory()
        .subscribe(res => {this.products = res;});
  

  this.username = this.userService.getNameUserLoggedIn();
  }
 addProduct(event){        
        event.preventDefault();
        var newProduct = {
            name: this.name,
            price : this.price,
            color : this.color,
            place : this.place,
            user : this.username      
        }        
        this._dataService.addProduct(newProduct)
            .subscribe(product => {
                this.products.push(product);
                this.name = '';
                this.price = 0 ;
                this.color ='';
                this.place = '';
                
            });
    }
    reload() {
    window.location.reload();
  }
  ngOnInit() {
  }

}
