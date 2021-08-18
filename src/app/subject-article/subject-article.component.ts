import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-subject-article',
  templateUrl: './subject-article.component.html',
  styleUrls: ['./subject-article.component.css']
})
export class SubjectArticleComponent implements OnInit {

  constructor(private api:ApiServiceService,private routers:ActivatedRoute,private router:Router,private address:Address) { }
data:any;
id: any;
pdf = this.address.pdf_url;
  ngOnInit(): void {
    this.routers.params.subscribe(res=>{let id = res.id;
      this.getdata(id);
    });
  }
  getdata(id:any){
    this.api.getarticle(id).subscribe((datas)=>{
      this.data=datas;
      console.log(datas);
    })
  }
  abstract_data(id:any){
   this.router.navigate(['abstract/' + id]);
      this.countview(id);
      console.log(id);
  }
full_text(id:any){
this.router.navigate(['abstract/' + id]);
}

  countview(id:any){
 this.api.countview(id).subscribe(res => { console.log(res); 
    
  })
  }

countdownload(url:any,id:any){
  window.open(url, "_blank");
    this.api.countdownload(id).subscribe(res => { console.log(res); 
      // console.log('varsha');
    });
  }

}
