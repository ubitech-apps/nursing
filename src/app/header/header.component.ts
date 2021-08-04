import { Component, OnInit } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public menu: any;

  constructor(private addre: Address) { }

  admin_url =this.addre.add; 

  ngOnInit(): void {
  }
 reloadCurrentPage() {
    window.location.reload();
   }
}
