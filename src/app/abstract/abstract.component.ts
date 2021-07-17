import { Component, OnInit } from '@angular/core';
declare var active : any;
@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    active();
  }

}
