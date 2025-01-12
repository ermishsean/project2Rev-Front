import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {User} from '../../models/user';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private us:UserserviceService) { }

  ngOnInit() {
  }
username = "";
password = "";
user;
error:string = "";

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


  onSubmit() {
    this.user = new User(2,this.username, this.password, "quatermaster");
    this.us.loginUser(this.username, this.password);
    if (this.us.getUser === null){
      this.error = "invalid login";
    }
    else{
      this.error = "";
    }
  }
  
}
