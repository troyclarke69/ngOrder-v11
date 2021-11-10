import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  isLoading = true;
  data: any[];
  order: Order[];
  // orderDetails: [];
  // customer: [];
  private customerId: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get("customerId");
      // console.log('customer', this.customerId);
    })

    this.apiService.fetchAllOrdersByCustomer(this.customerId).subscribe(
      (data: any[]) => {
        this.order = data;
        console.log('All-Orders-by-Customer', this.order);
        this.isLoading = false;
      }      
    )
  }

}