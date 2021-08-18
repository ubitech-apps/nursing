import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-current-issue',
  templateUrl: './current-issue.component.html',
  styleUrls: ['./current-issue.component.css']
})
export class CurrentIssueComponent implements OnInit {

  constructor(private addre:Address, private api:ApiServiceService, private routers:ActivatedRoute,private router: Router) { }
data:any;
id: any;
pdf = this.addre.pdf_url;

  ngOnInit(): void {
    this.api.current_article().subscribe((datas)=>{
      this.data = datas;
    });
  }
full_text(id:any){
  this.router.navigate(['full-text/' + id])
  // this.countdownload(id);

}
 abstract_data(id:any){
    this.router.navigate(['abstract/' + id]);
      this.countview(id);
      console.log(id);
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




