import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-librarians',
  templateUrl: './librarians.component.html',
  styleUrls: ['./librarians.component.css']
})
export class LibrariansComponent implements OnInit {
 
  constructor( private router:ActivatedRoute,private Routers:Router,private api:ApiServiceService) { }
daata:any;
  ngOnInit(): void {
  
      this.api.librarians().subscribe((data)=>{
        console.log(data);
        this.daata=data;
      })
  
  }

}
