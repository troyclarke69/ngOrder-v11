import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';

import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [

  //{ path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  //{ path: '**', redirectTo: '' },
  { path: 'news', component: NewsComponent },
  //{ path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'customer-orders/:customerId', component: CustomerOrdersComponent, canActivate: [AuthGuard] },
  { path: 'order/:orderId', component: OrderComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
