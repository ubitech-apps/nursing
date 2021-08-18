import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data: any;
  constructor(private api:ApiServiceService, private Addre:Address) { }

  ngOnInit(): void {

  this.api.about().subscribe((data)=>{

      this.data = data;

      console.log(data);
      
    });
 
  }

}
