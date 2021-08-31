
import { Injectable } from '@angular/core';
import { Address } from './address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  subscribeTOC: any;
  datasf(id: any) {
    throw new Error('Method not implemented.');
  }

  getDataa(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private addre :Address,private http:HttpClient ) { }
  
api=this.addre.api;

editorial_board(){
  return this.http.get(this.api + 'editorialboard.php')
}

current_article(){
return this.http.get(this.api+'data_new.php')

}
 about(){
   return this.http.get(this.api+'about.php')
 }

 abstract(id:any){
   return this.http.get(this.api+`abstract_page.php?id=${id}`)

 }
 full_text (id:any){
return this.http.get(this.api+`full-text.php?id=${id}`)
 }
 references(id:any){
   return this.http.get(this.api+`references.php?id=${id}`)
 }
issue(){
  return this.http.get(this.api+'issues.php')
}

authorGuidelines(){
  return this.http.get(this.api+'authorGuidelines.php')
}
manuscript(){
  return this.http.get(this.api+'manuscriptSubmission.php')
}
countview(id:any){
return this.http.get(this.api+`upadatecountview.php?id=${id}`)

}
countdownload(id:any){
return this.http.get(this.api+`upadatecountdownload.php?id=${id}`)

}
  mail(formdata:any){
    
    
    return this.http.post(this.api + 'mail.php',formdata)
  }

 signup(formdata: any) {
   
    return this.http.post(this.api + 'signup.php', formdata);
  }
  past_issue(id:any){
  // console.log(id);
   return this.http.get(this.api+`past_issue.php?id=${id}`)
 
  }
  indexdata(){
    
    return this.http.get(this.api+`index_body.php`);

  }
  getarticle(id:any){
    return this.http.get(this.api+`subject_article.php?id=${id}`)
  }
  trending_article(){
    return this. http.get(this.api+'trending_article.php')
  }
  total(){
    return this.http.get(this.api+'total_article.php')
  }
   searchArticle(fdata:any){
    return this.http.post(this.api+'searchbox.php', fdata);
  }
  librarians(){
    return this.http.get(this.api+'librarians.php');
  }
  peerreview(){
    return this.http.get(this.api+'peer_review.php');
  }
  plagiarism(){
    return this.http.get(this.api+'plagiarism.php');
  }

  }