import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.component.html',
  styleUrls: ['./full-text.component.css']
})
export class FullTextComponent implements OnInit {
  id: any;

data:any;
  constructor(private api:ApiServiceService,private dialog: MatDialog,private address:Address,private routers:ActivatedRoute,private router:Router) { }
pdf_path= this.address.pdf_url;
  ngOnInit(): void {

this.routers.params.subscribe(res=>{let id = res.id;
  this.getDataa(id);

})

  }

getDataa (id:any){
this.api.abstract(id).subscribe((datas: any)=>{
  this.data=datas;
  console.log(datas);
  
})
}

abstract(id:any){
 this.router.navigate(['abstract/'+ id]) 
}

 exit(){
    window.location.reload();
  }

downloadfiles(id: any){
}

}
