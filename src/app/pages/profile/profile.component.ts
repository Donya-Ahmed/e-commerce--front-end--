import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  passStatus:boolean=false
user:any = {
  _id:"",
  name:"",
  password:"",
  email:"",
  birthDate:"",
  image:""
}

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this._auth.me().subscribe(
      data=>{
        this.user= data.data
      }
    )
  }

  editData(editForm:NgForm){
    console.log(editForm.value)
    this._auth.profileEdit(editForm.value).subscribe((data)=>{console.log(data)},(err)=>{console.log(err)},()=>{})
  }
  editPassword(editPass:NgForm){
    console.log(editPass.value)
    console.log(editPass.value.password)
    console.log(editPass.value.passwordconf)
    if(editPass.value.password==editPass.value.passwordconf){
    this._auth.profileEdit(editPass.value.password).subscribe((data)=>{console.log(data)},(err)=>{console.log(err)},()=>{})
    }
    else{
      this.passStatus=true

    }



  }

}
