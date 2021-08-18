import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-submit-manuscript',
  templateUrl: './submit-manuscript.component.html',
  styleUrls: ['./submit-manuscript.component.css']
})
export class SubmitManuscriptComponent implements OnInit {
data:any;
  constructor(private api:ApiServiceService,private address:Address) { }

  ngOnInit(): void {
    this.api.manuscript().subscribe((data)=>{
      this.data=data;

      console.log(data);
      
    })
  }

}
