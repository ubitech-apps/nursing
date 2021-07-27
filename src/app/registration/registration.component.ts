import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  fullname:any;
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
    "Author" , "Reviewer"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
