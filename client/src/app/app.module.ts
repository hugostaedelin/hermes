import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { StockItemComponent } from './components/stock/stock-item/stock-item.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderItemComponent } from './components/order/order-item/order-item.component';
import { CustomerItemComponent } from './components/customer/customer-item/customer-item.component';
import { RefreshService } from "./services/refresh.service";
import { HeaderComponent } from './menu/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockItemComponent,
    StockListComponent,
    ProductItemComponent,
    ProductListComponent,
    OrderItemComponent,
    OrderListComponent,
    CustomerItemComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [RefreshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
