import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook=faFacebook;
  linkedin=faLinkedin;
  twitter=faTwitter;
  
  constructor() { }

  ngOnInit(): void {
  }

}
