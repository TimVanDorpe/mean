import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
import { FooterComponent } from './footer/footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    LoginFormComponent,
    FooterComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    RouterModule.forRoot([
     { path : 'employee' , 
     //canActivate : [AuthguardGuard],
      component : EmployeesComponent }
      ,
       { path : 'product' ,
        //canActivate : [AuthguardGuard],
      component : ProductsComponent }
      ,
      { path : 'login-form' ,
      component : LoginFormComponent }
      ,
       { path : 'register-form' ,
      component : RegisterFormComponent }]
      )
  ],
  providers: [DataService, UserService, AuthguardGuard], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }