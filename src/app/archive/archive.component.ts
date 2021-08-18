import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ArchiveComponent implements OnInit {
data:any;
item:any;
  constructor(private api:ApiServiceService,private addres:Address ,private router:ActivatedRoute,private routers:Router) {}


  ngOnInit(): void {
  this.api.issue().subscribe((datas)=>{
      this.data = datas;
       console.log(datas);
      
    });
  }
  get_issue(id:any){
    this.routers.navigate(['past-issue/'+ id])
 
  }
  

}
