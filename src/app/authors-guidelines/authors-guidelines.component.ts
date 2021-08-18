import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-authors-guidelines',
  templateUrl: './authors-guidelines.component.html',
  styleUrls: ['./authors-guidelines.component.css']
})
export class AuthorsGuidelinesComponent implements OnInit {
data:any;
  constructor(private api:ApiServiceService,private address:Address) { }

  ngOnInit(): void {
    this.api.authorGuidelines().subscribe((datas)=>{
      this.data=datas;
    })
  }

}
