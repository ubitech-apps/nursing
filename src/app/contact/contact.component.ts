import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('contact')
  mytemplateForm!: NgForm;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  hide = true;
  name: any = '';
  email: any = '';
  message: any = '';
 
  mobile: any = '';
 


  constructor(private api:ApiServiceService,private address:Address,private _snackBar:MatSnackBar) { }


  ngOnInit(): void {
  }
  
  onSubmit(formdata: any) {
    this.api.mail(formdata).subscribe((res) => {
      if (res) {
        this._snackBar.open(
          'Thanks for contacting us. We will get in touch with you soon.',
          'Okay',
          {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          }
        );
        this.mytemplateForm.resetForm();
      } else {
        this._snackBar.open('Submission Failed', 'Retry', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.mytemplateForm.resetForm();
      }
    });
  }
    resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
