import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ArchiveComponent implements OnInit {
data:any[];
  constructor() {
this.data =[
  {name:"Volume 70 2021"},
  {name:"Volume 69 2020"},
  {name:"Volume 68 2019"},
  {name:"Volume 67 2018"},
  {name:"Volume 66 2017"}


] 

   }

  ngOnInit(): void {
  }

}
