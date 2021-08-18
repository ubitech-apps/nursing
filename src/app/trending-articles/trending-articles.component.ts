import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-trending-articles',
  templateUrl: './trending-articles.component.html',
  styleUrls: ['./trending-articles.component.css']
})
export class TrendingArticlesComponent implements OnInit {

  constructor(private api:ApiServiceService,private address:Address,private routers:ActivatedRoute,private Routes:Router) { }

  ngOnInit(): void {
    this
  }

}
