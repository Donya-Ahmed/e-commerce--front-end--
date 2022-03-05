import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  errorMsg:string=""
  flag:boolean=false
  constructor(private _auth:AuthService ,private _route:Router) { }
 handlerRegister(registerForm:NgForm){
    console.log(registerForm.value)
    if(registerForm.valid){
      this._auth.register(registerForm.value).subscribe(data=>{
   },
   (err)=>{ this.errorMsg="error adding data"},
   ()=>{
    registerForm.resetForm()
     this.errorMsg="data added successufly"
     this.flag=true
     this._route.navigateByUrl('/login')
    }

   )
    }

 }


  ngOnInit(): void {
  }

}

 // if(data.apiStatus){

        //   this.errorMsg="data added successufly"
        //   this.flag=true
        // }
        // else{
        //   this.errorMsg=data.message
        // }
