import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientHelper } from './url-helper';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private httpClient: HttpClient) { }

    public fetchData() {
        // console.log('fetchData', HttpClientHelper.baseURL);
        return this.httpClient.get(`${HttpClientHelper.newsURL}`);
    }

    public fetchAllCustomers() {
        // console.log('fetchData', HttpClientHelper.baseURL);
        return this.httpClient.get(`${HttpClientHelper.allCustomersURL}`);
    }

    public fetchAllProducts() {
        // console.log('fetchData', HttpClientHelper.baseURL);
        return this.httpClient.get(`${HttpClientHelper.allProductsURL}`);
    }

    public fetchAllOrders() {
        return this.httpClient.get(`${HttpClientHelper.allOrdersURL}`);
    }

    public fetchOrderByOrder(orderId) {
        // console.log('fetchData', HttpClientHelper.baseURL);
        return this.httpClient.get(`${HttpClientHelper.orderByOrderURL}` + orderId);
    }

    public fetchAllOrdersByCustomer(customerId) {
        // console.log('fetch', HttpClientHelper.allOrdersByCustomerURL);
        return this.httpClient.get(`${HttpClientHelper.allOrdersByCustomerURL}` + customerId);
    }
    
}
