import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.fetchData().subscribe(
      (data: any[]) => {
        this.data = data['articles'];
      }
    )
  }

}
