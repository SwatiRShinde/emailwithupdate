import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
let headers = {
  headers : new HttpHeaders({
    'Content-Type' :'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpreq:HttpClient) { }

  sendMessage(body: { email: any; score:any}){
    console.log("in email service");
    console.log(body.email);
    console.log(body.score);
    return this.httpreq.post("http://localhost:8080/api/email",body,headers);
  }
}
