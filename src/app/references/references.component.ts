import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../abstract/abstract.component';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

     openDialog(data: any): void {
   console.log(data);
   
   const dialogRef = this.dialog.open(CoverImage, {
     width:'30%',
      data: { graphic : data }
    
    });
  } 

  constructor(private api:ApiServiceService,private dialog:MatDialog,private address:Address,private router:ActivatedRoute,private Router:Router) { }
id:any;
item:any;
data:any;
pdf=this.address.pdf_url;
img=this.address.img_url;
supplementary_pdf=this.address.supplementary;

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
