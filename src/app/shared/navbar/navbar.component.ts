import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

cart:Cart[]=[]

productId:any

//  categories:any[]=['electroncis','clouthes','supermarket','furniture','books']
categories:any[]=[{
  "category":'electroncis'
  },
  {
  "category":'clouthes'
  },
  {
  "category":'supermarket'
  },
  {
  "category":'furniture'
  },
  {
  "category":'books'
  },
  ]


  constructor(public _auth:AuthService,private _router:Router,private _route:ActivatedRoute) {
    this._auth.me().subscribe(user=>{
    this._auth.isLogin=true
    this._auth.user=user.data
  },
  (e)=>{
    this._auth.isLogin=false
    this._auth.user=null
  },
  ()=>{
    this._router.navigateByUrl('/')
  })
  this.showUserCart()


}

  ngOnInit(): void {

  }
  logout(){
    this._auth.logout().subscribe((data)=>{},
    (err)=>{console.log(err)},
    ()=>{
      this._auth.isLogin=false
      this._auth.user={}
      localStorage.removeItem("userToken")
      this._router.navigateByUrl('/login')
    })
  }
  showUserCart(){
    this._auth.showUserCart().subscribe((data)=>{
      this._auth.cartId=  data.data[0]._id

      this._auth.cart=  data.data[0].products

    },
    (err)=>{console.log(err)},
    ()=>{})
  }
  deleteItem(c:any,p:any){
    // this.cartId=c._id
    // console.log(this.cartId)
    // this.productId=p._id
    // console.log(this.productId)

    // this.cartId=this._route.snapshot.params?.['cartId']
    // this.productId=this._route.snapshot.params?.['productId']
    console.log(c)
    console.log(p)
     this._auth.delFromCart(c,p).subscribe((data)=>{
      console.log(data.data.products)
         this._auth.cart=data.data.products
       },
    (err)=>{console.log(err)},
    ()=>{})

    // this._auth.delFromCart(c,p).subscribe((data)=>{},(err)=>{console.log(err)},()=>{})


  }

}
