import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Profile } from '../profilemodel';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['./displaycomponent.component.css']
})
export class DisplaycomponentComponent implements OnInit {

  userslist: Array<Profile>
  ProfileDisplay:any

  constructor(private profileservice :ProfileserviceService) { }



  Getprofiledisplay():void{
    this.profileservice.getprofile().subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      console.log(response)
      this.userslist= response.data
    })
  }
  

  ngOnInit(): void {
  }

}
