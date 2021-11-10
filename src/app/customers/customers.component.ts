import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Customer } from '../interfaces/customer';
import { HttpClient } from '@angular/common/http';
import { HttpClientHelper } from '../services/url-helper';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  isLoading = true;
  customers: Customer[];
  total = 0;
  page = 1;
  limit = 10;
  headers = {};

  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
   this.getCustomers();
  }

  getCustomers(): void {
    // this.apiService.fetchAllCustomers().subscribe(
    //   (data: any[]) => {
    //     this.customer = data;
    //     // console.log('All-Customers', this.data);
    //     this.isLoading = false;
        
    //   }      
    // )

    this.httpClient.get<any>(`${HttpClientHelper.allCustomersURL}` 
      + '?pageNumber=' + this.page 
      + '&pageSize=' + this.limit
      , {observe: 'response'}).subscribe(resp => {

        this.customers = resp.body;

        this.headers = JSON.parse(resp.headers.get("X-Pagination"));          

        this.total = this.headers['TotalCount'];

        this.isLoading = false;

    });
  }

  goToPrevious(): void {
    this.isLoading = true;
    this.page--;
    this.getCustomers();
  }

  goToNext(): void {
    this.isLoading = true;
    this.page++;
    this.getCustomers();
  }

  goToPage(n: number): void {
    this.isLoading = true;
    this.page = n;
    this.getCustomers();
  }

}
