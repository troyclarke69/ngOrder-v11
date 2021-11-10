import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Order } from '../interfaces/order';

import { HttpClient } from '@angular/common/http';
import { HttpClientHelper } from '../services/url-helper';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isLoading = true;
  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  headers = {};

  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getOrders();
    // this.apiService.fetchAllOrders().subscribe(
    //     (data: any[]) => 
    //     {
    //         this.orders = data;
    //         console.log('Orders', this.orders);
    //         this.isLoading = false;
    //       }      
    //     )
  }

  getOrders(): void {
    this.httpClient.get<any>(`${HttpClientHelper.allOrdersURL}` 
      + '?pageNumber=' + this.page 
      + '&pageSize=' + this.limit
      , {observe: 'response'}).subscribe(resp => {

        this.orders = resp.body;

        this.headers = JSON.parse(resp.headers.get("X-Pagination"));          

        this.total = this.headers['TotalCount'];

        this.isLoading = false;

    });
  }

  goToPrevious(): void {
    this.isLoading = true;
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    this.isLoading = true;
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.isLoading = true;
    this.page = n;
    this.getOrders();
  }

}
