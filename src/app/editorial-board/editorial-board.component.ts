import { Component, OnInit } from '@angular/core';
import { Address } from "../address";
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-editorial-board',
  templateUrl: './editorial-board.component.html',
  styleUrls: ['./editorial-board.component.css']
})
export class EditorialBoardComponent implements OnInit {
  data: any;
  constructor(private addre:Address, private api:ApiServiceService) { }

editorial_url = this.addre.editoral_img;

  ngOnInit(): void {

this.api.editorial_board().subscribe((datas)=>{
this.data = datas;

});

  }

}
