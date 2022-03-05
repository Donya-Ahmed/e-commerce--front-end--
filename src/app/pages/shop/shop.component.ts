import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  data:Product[]=[]
 // data:any[]=[]
 isLoad:boolean=false
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this.showProducts()

  }
  showProducts(){
    this._auth.showProducts().subscribe(
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
