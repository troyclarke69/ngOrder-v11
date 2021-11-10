import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { HttpClientHelper } from '../services/url-helper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // data = [];
  isLoading = true;
  products: Product[];
  total = 0;
  page = 1;
  limit = 10;
  headers = {};

  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
    // this.apiService.fetchAllProducts().subscribe(
    //   (data: any[]) => {
    //     this.product = data;
    //     // console.log('All-Products', this.data);
    //     this.isLoading = false;
    //   }
    // )
  }

  getProducts(): void {

    this.httpClient.get<any>(`${HttpClientHelper.allProductsURL}` 
      + '?pageNumber=' + this.page 
      + '&pageSize=' + this.limit
      , {observe: 'response'}).subscribe(resp => {

        this.products = resp.body;

        this.headers = JSON.parse(resp.headers.get("X-Pagination"));          

        this.total = this.headers['TotalCount'];

        this.isLoading = false;

    });
  }

  goToPrevious(): void {
    this.isLoading = true;
    this.page--;
    this.getProducts();
  }

  goToNext(): void {
    this.isLoading = true;
    this.page++;
    this.getProducts();
  }

  goToPage(n: number): void {
    this.isLoading = true;
    this.page = n;
    this.getProducts();
  }

}
