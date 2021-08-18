import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  graphic: any;
}
@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})

export class AbstractComponent implements OnInit {

 openDialog(data: any): void {
   console.log(data);
   
   const dialogRef = this.dialog.open(CoverImage, {
     width:'30%',
      data: { graphic : data }
    
    });
  }

  constructor(private Address:Address,public dialog: MatDialog, private api:ApiServiceService, private routes:Router,private active_router:ActivatedRoute) { }

item:any;
pdf=this.Address.pdf_url;
img=this.Address.img_url;
id:any;

  ngOnInit(): void {
    this.active_router.params.subscribe( res => { let id  = res.id;
    this.getDataa(id);
    });
  }
  
   getDataa(id: any){
    this.api.abstract(id).subscribe((members: any)=>{
      console.log(members);
      this.item= members;
    });
  }

  exit(){
    window.location.reload();
  }

full_text(id:any){
  this.routes.navigate(['full-text/' + id])

}

references(id:any){
this.routes.navigate(['references/'+ id])
}

}

@Component({
  selector: 'coverImage',
  templateUrl:'./cover-image.html',
}) export class CoverImage {

  
  constructor(
    public dialogRef: MatDialogRef < CoverImage >, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {

    this.dialogRef.close();
  }
}
