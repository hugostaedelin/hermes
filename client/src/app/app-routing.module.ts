import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from "./components/customer/customer-list/customer-list.component";
import { ProductListComponent } from "./components/product/product-list/product-list.component";
import { StockListComponent } from "./components/stock/stock-list/stock-list.component";
import { OrderListComponent } from './components/order/order-list/order-list.component';

const routes: Routes = [
  {path: 'stock', component: StockListComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'order', component: OrderListComponent},
  {path: 'customer', component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
