import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-index-body',
  templateUrl: './index-body.component.html',
  styleUrls: ['./index-body.component.css']
})
export class IndexBodyComponent implements OnInit {
img=this.address.img_url;
  constructor(private api:ApiServiceService,private address:Address,private Router:Router,private active_router:ActivatedRoute) { }
data:any;
datas:any
vau:any;
  ngOnInit(): void {
 this.api.indexdata().subscribe((datas)=>{
      this.data = datas;
    });
    this.api.trending_article().subscribe((datab)=>{
      console.log(datab)
      this.datas=datab
    })
    this.api.total().subscribe((data)=>{
      this.vau=data;
    })
  }
  getarticle(id:any){
    this.Router.navigate(['article/'+ id])
    console.log(id);
  }
  abstract_data(id:any){
    this.Router.navigate(['abstract/' + id]);
    
      console.log(id);
  }
  search(){

  }

}
 