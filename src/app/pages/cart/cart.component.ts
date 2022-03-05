import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Cart[]=[]

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
    this.showUserCart()
  }
  showUserCart(){
    this._auth.showUserCart().subscribe((data)=>{
      console.log(data.data)
        this.cart=data.data


    },
    (err)=>{console.log(err)},
    ()=>{})
  }

}
