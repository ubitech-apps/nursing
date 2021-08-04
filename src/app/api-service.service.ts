
import { Injectable } from '@angular/core';
import { Address } from './address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private addre :Address,private http:HttpClient ) { }
  
api=this.addre.api;

editorial_board(){
  return this.http.get(this.api + 'editorialboard.php')
}
current_article(){
return this.http.get(this.api+'data_new.php')

}

}
