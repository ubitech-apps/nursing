import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-plagiarism',
  templateUrl: './plagiarism.component.html',
  styleUrls: ['./plagiarism.component.css']
})
export class PlagiarismComponent implements OnInit {
datas:any;
  constructor(private api:ApiServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
 
      this.api.plagiarism().subscribe((data)=>{
        this.datas=data;
      })


  }

}
