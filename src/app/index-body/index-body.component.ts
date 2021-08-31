import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-index-body',
  templateUrl: './index-body.component.html',
  styleUrls: ['./index-body.component.css']
})
export class IndexBodyComponent implements OnInit {
 config: SwiperOptions = {
    // pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    breakpoints: {
      1300: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 1
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      },
      1270: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.slider-next-button',
      prevEl: '.slider-prev-button'
    },
    loop: true
  
  };
img=this.address.img_url;
  constructor(private api:ApiServiceService,private address:Address,private Router:Router,private active_router:ActivatedRoute) { }
data:any;
datas:any
vau:any;
  btnClass: any;
  iptClass:any;
  searchbar:any
  searchMobile:any
  ngOnInit(): void {
 this.api.indexdata().subscribe((datas)=>{
      this.data = datas;
    });
    this.api.trending_article().subscribe((datab)=>{
      //console.log(datab)
      this.datas=datab
    })
    this.api.total().subscribe((data)=>{
      this.vau=data;
    })
  }
  getarticle(id:any){
    this.Router.navigate(['article/'+ id])
    //console.log(id);
  }
  abstract_data(id:any){
    this.Router.navigate(['abstract/' + id]);
  }
  
 searchs(fdata:any){
  //  console.log(fdata);
    this.Router.navigate(['search/', fdata.searchbar]);
  }


}
 