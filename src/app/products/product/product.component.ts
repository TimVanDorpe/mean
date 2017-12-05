import { Component, OnInit } from '@angular/core';

import {DataService} from '../../data.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products : Array<any>;

name:String;
price:0;
color:String;
place:String;

  constructor(private _dataService: DataService) { 
   
 //get thee products from de datasrvice
    this._dataService.getInventory()
        .subscribe(res => {this.products = res;});
  }
 addProduct(event){        
        event.preventDefault();
        var newProduct = {
            name: this.name,
            price : this.price,
            color : this.color,
            place : this.place            
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
