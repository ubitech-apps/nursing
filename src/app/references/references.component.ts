import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  constructor(private api:ApiServiceService,private address:Address,private router:ActivatedRoute,private Router:Router) { }
id:any;
item:any;
pdf=this.address.pdf_url;

  ngOnInit(): void {
    this.router.params.subscribe(res=>{let id = res.id;
      this.getdata(id);

    })
  }
  getdata(id:any){
    this.api.references(id).subscribe((data)=>{
      this.item=data;
      console.log(data);
    })

  }

  exit(){
    window.location.reload();
  }
  
  full_text(id:any){
   this.Router.navigate(['full-text/' + id])
  }

abstract(id:any){
this.Router.navigate(['abstract/'+ id])
}

}
