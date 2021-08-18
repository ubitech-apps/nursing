import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 @ViewChild('register')
  mytemplateForm!: NgForm;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  fullname:any;
  Tnai_number:any;
  email:any;
  password:any;
  usertype:any;
  mobile:any;
  address:any;
  qualification:any;
  salutation:any;
  hide = true;

  salutations: string[] =[
   " Mr.",'Ms.', "Miss" ,'Dr.','prof.'
  ];
  usertypes:string[]=[
    "Author" , "Viewer"
  ];

  constructor(private api: ApiServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
   onSubmit(formdata: any) {
    this.api.signup(formdata).subscribe((res) => {
      if (res) {
        this._snackBar.open('Successfully Registered', 'Thanks', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary'],
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.mytemplateForm.resetForm();
      } else {
        this._snackBar.open('Already Register', 'Retry', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.mytemplateForm.resetForm();
      }
    });
  }

}
