import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isLoading = true;
  order: Order[];
  orderId: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.orderId = params.get("orderId");
      // console.log('order', this.orderId);
    })


    this.apiService.fetchOrderByOrder(this.orderId).subscribe(
      (data: any[]) => {
        this.order = data;
        // console.log('Order' + this.orderId, this.data);
        this.isLoading = false;
      }      
    )
  }

}
