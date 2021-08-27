import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../abstract/abstract.component';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.component.html',
  styleUrls: ['./full-text.component.css']
})

export class FullTextComponent implements OnInit {
   openDialog(data: any): void {
   console.log(data);
   
   const dialogRef = this.dialog.open(CoverImage, {
     width:'30%',
      data: { graphic : data }
    
    });
  } 

  id: any;

item:any;
  constructor(private api:ApiServiceService, private dialog: MatDialog,private address:Address,private routers:ActivatedRoute,private router:Router) { }
pdf= this.address.pdf_url;
supplementary_pdf=this.address.supplementary;
img=this.address.img_url;
  xmlFile: any;
  issueStatus: any;
  ids: any;
  fulltext=1;
  reference=0
  abstract=0;
  xml=0;
  Graphical_abstract=0;

  article_id=localStorage.getItem('article_id');

  step:any='step2';
  
  fullText(){
    this.fulltext=1;
    this.abstract=0;
    this.xml=0;
    this.Graphical_abstract=0;
  }
  Xml(){
    this.fulltext=0;
    this.abstract=0;
    this.xml=1;
    this.Graphical_abstract=0;
      }
  GraphicalAbstract(){
    this.fulltext=0;
    this.abstract=0;
    this.xml=0;
    this.Graphical_abstract=1;
      }
  Abstract(){
    this.fulltext=0;
    this.abstract=1;
    this.xml=0;
    this.Graphical_abstract=0;
      }
      Reference(){
        this.reference=1;
        this.fulltext=0;
        this.abstract=0;
        this.xml=0;
        this.Graphical_abstract=0;
      }
  ngOnInit(): void {
this.routers.params.subscribe(res=>{let id = res.id;
  this.getDataa(id);

})

  }

   getDataa(id: any){
    this.api.abstract(id).subscribe((members: any)=>{
      console.log(members);
      this.item= members;
    });
  }

references(id:any){
this.router.navigate(['references/'+ id])
}
 exit(){
    window.location.reload();
  }

downloadfiles(id: any){
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
