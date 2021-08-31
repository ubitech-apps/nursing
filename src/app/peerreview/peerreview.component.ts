import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-peerreview',
  templateUrl: './peerreview.component.html',
  styleUrls: ['./peerreview.component.css']
})
export class PeerreviewComponent implements OnInit {

  constructor(private api:ApiServiceService,private active:ActivatedRoute) { }
datas:any;

  ngOnInit(): void {
   
      this.api.peerreview().subscribe((data)=>{
        this.datas=data;
      })
 
  }

}
