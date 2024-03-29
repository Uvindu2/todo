import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


   
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  
  session:any=sessionStorage.getItem('token');
  token=this.session.replaceAll('"', '');
  head_obj=new HttpHeaders().set("Authorization","Bearer "+this.token);

  private url = 'http://127.0.0.1:8000/api/login/';
  private url2 = 'http://127.0.0.1:8000/api/logout/';

  
  constructor(private httpClient: HttpClient) { }

  login(data:any){
   
    return this.httpClient.post(this.url,data);
  }
  logOut(){
    return this.httpClient.post(this.url2,{headers:this.head_obj});

  }
  
}