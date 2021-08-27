import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {

  constructor(private api:ApiServiceService,private address:Address, private active:ActivatedRoute, private router:Router,) { }

pdf = this.address.pdf_url;
result:any;
  ngOnInit(): void {
      this.active.params.subscribe( res => { let response  = res.fdata;
      this.getdata(response);
      // alert(response)
      // console.log(response);
      }); 
 
  }
  getdata(response:any){
  this.api.searchArticle(response).subscribe(res => { 
      this.result = res;
      console.log(response);
    
    });
  }
 abstract_data(id:any){
    this.router.navigate(['abstract/' + id]);
    //  this.countview(id);
      console.log(id);
  }
full_text(id:any){
  this.router.navigate(['full-text/' + id])
  // this.countdownload(id);

}
countdownload(url:any,id:any){
  window.open(url, "_blank");
    this.api.countdownload(id).subscribe(res => { console.log(res); 
      // console.log('varsha');
    });
  }

}
