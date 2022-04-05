import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { ProfileserviceService } from '../profileservice.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  issubmitted=false;
  
  profilelist:any;
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(){}
  

  CreateProfile(){
    console.log(this.profileForm.value);
    this.issubmitted=true;
  }
 

  ngOnInit(): void {
   
     
    }
  }
  

