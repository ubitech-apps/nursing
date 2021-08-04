import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-current-issue',
  templateUrl: './current-issue.component.html',
  styleUrls: ['./current-issue.component.css']
})
export class CurrentIssueComponent implements OnInit {

  constructor(private addre:Address, private api:ApiServiceService) { }
data:any;
  ngOnInit(): void {
    this.api.current_article().subscribe((datas)=>{

      this.data = datas;

      console.log(datas);
      
    });
  }

}
