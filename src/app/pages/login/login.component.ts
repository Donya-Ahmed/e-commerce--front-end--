import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg:string=''
  isSubmitted:boolean=false
 loginForm:FormGroup =new FormGroup({
   email:new FormControl('',[Validators.email,Validators.required]),
   password:new FormControl('',[Validators.required]),
 })
  constructor(private _auth:AuthService ,private _route:Router) { }

 get email(){return this.loginForm.get('email')}
 get password(){return this.loginForm.get('password')}

  ngOnInit(): void {
  }
  login(){
    this.errorMsg=""
    this.isSubmitted=true
    if(this.loginForm.valid){
      this._auth.login(this.loginForm.value).subscribe(data=>{
         localStorage.setItem('userToken',data.data.token)
      },
      (err)=>{
        console.log(err)
        this.errorMsg="not authorized"},
      ()=>{
        this._auth.me().subscribe(user=>{
          this._auth.isLogin=true
          this._auth.user=user.data
        },
        (e)=>{console.log(e)},
        ()=>{
          this._route.navigateByUrl('/')
        })


        }
      )
    }

  }

}
// errorMsg:string=''
//   constructor(private _auth:AuthService) { }

//  handlerLogin(loginForm:NgForm){
//     if(loginForm.valid){
//       this._auth.login(loginForm.value).subscribe(data=>{
//         if(!data.apiStatus){
//           this.errorMsg=data.message
//         }
//       })
//     }
//   }
