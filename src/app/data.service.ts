import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  getInventory()
  {return this._http.get("/api/inventory")
  .map(result => this.result = result.json().data);
}

 getEmployees()
  {return this._http.get("/api/employees")
  .map(result => this.result = result.json().data);
}

getTasks()
{
  return this._http.get("/tasks/tasks")
  .map(result => this.result = result.json().data);
}
addEmployee(newEmployee){
        console.log("add new employee" + newEmployee);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/employees', JSON.stringify(newEmployee), {headers: headers})
            .map(res => res.json());
    }
  deleteEmployee(id){
        return this._http.delete('/api/employees/'+id)
            .map(res => res.json());
    }
    
    updateEmployee(newEmployee){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/employees/'+newEmployee._id, JSON.stringify(newEmployee), {headers: headers})
            .map(res => res.json());
    }

addProduct(newProduct){
        console.log("add new product" + newProduct);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/products', JSON.stringify(newProduct), {headers: headers})
            .map(res => res.json());
    }
  deleteProduct(id){
        return this._http.delete('/api/products/'+id)
            .map(res => res.json());
    }
    

}