import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from './Users';
import { RegisterService } from 'src/app/services/user/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  flag:boolean=false;
  usr=new Users();
  usrList:any;
  logEmail:string="";
  logPassword:string="";



  constructor(private r:Router,private sObj:RegisterService) { }

  ngOnInit() {
  }
  login(){
    // alert(this.logEmail+"  "+this.logPassword);
    this.sObj.getUsers().subscribe(data=>{
      console.log(data);
     this.usrList=data;
     console.log("userlist");
     console.log(this.usrList);
      for(let i=0;i<this.usrList.length;i++)
      {
        if(this.logEmail==this.usrList[i].email && this.logPassword==this.usrList[i].password)
        {
          this.flag=true;
          console.log("login done");
          sessionStorage.setItem("userId",this.usrList[i].userId);
          sessionStorage.setItem("userEmail",this.usrList[i].email);
          if(this.usrList[i].role=="User")
          {
            this.r.navigate(['']);
          }
          else
          {
            this.r.navigate(['/admin']);
          }
        }
      }
      if(this.flag==false)
      {
        console.log("login failed");
      }

    })

  }
  signup(){
    // alert(this.signUpEmail+"  "+this.signUpName+"  "+this.signUpPassword1+"  "+this.signUpPassword2);
    console.log(this.usr);
    this.sObj.postUser(this.usr).subscribe(data=>{
      console.log(data);
    })

  }
}
