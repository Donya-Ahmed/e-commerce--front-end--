import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';
import {Product}  from 'src/app/models/product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Product[]=[]
 // data:any[]=[]
 isLoad:boolean=false



  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this.sortProducts()
  }
  sortProducts(){
    this._auth.sortProducts().subscribe(
      (data)=>{
        console.log(data.data)
         this.data=data.data
      },
      (err)=>{console.log(err)},
      ()=>{
        this.isLoad=true
      }
    )
  }

}
