import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-past-article',
  templateUrl: './past-article.component.html',
  styleUrls: ['./past-article.component.css']
})
export class PastArticleComponent implements OnInit {
data:any;
id:any;

pdf = this.address.pdf_url;
  constructor(private api :ApiServiceService,private address:Address,private acti_router:ActivatedRoute,private routers:Router) { }

  ngOnInit(): void {
   this.acti_router.params.subscribe( res => { let id  = res.id;
    this.article_data(id);
    console.log(id);
    });
  }

  article_data(id:any){
    this.api.past_issue(id).subscribe((item)=>{
      this.data=item
      console.log(id);
    })

  }
  abstract_data(id:any){
 this.routers.navigate(['full-text/' + id])

  }
full_text(id:any){
this.routers.navigate(['abstract/' + id]);
}
countdownload(url:any,id:any){
  window.open(url, "_blank");
    this.api.countdownload(id).subscribe(res => { console.log(res); 
      // console.log('varsha');
    });
  }


}
