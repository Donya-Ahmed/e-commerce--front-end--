import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  cart:Cart[]=[]
cartId:any
id:any
cartForm:FormGroup =new FormGroup({
  productId:new FormControl(this._route.snapshot.params?.['id']),
  quantity:new FormControl(),
  title:new FormControl()
})

product:Product={
  title:"",
  discription:"",
   categories:"",
  subcategory:"",
  attributes:[
  {
             attributeName:"" ,
              values:[
                   {
                       value:"",
                        quantity:0
                   }

                     ]

  }
  ],
  price:0,
  image:"",
  avaliable:true,
  createdAt: "",
  updatedAt:"",
  _id:""
}
  constructor(private  _auth:AuthService ,private _route:ActivatedRoute,private _router:Router ) { }

  ngOnInit(): void {
    this.id=this._route.snapshot.params?.['id']

   this.showProductFun(this.id)
  }
  showProductFun(id:any){
    this._auth.showProduct(id).subscribe((data)=>{
      //  console.log(data)
      this.product=data.data

    },(err)=>{
      console.log(err)
    },()=>{})
  }

  createCart(){
    this._auth.createCart(this.cartForm.value).subscribe((data)=>{
      console.log(data)
    this._auth.cart.push({quantity:this.cartForm.value.quantity, ...this.product})
    },
    (err)=>{console.log(err)},
    ()=>{
      this._router.navigateByUrl('/shop')

    })
    // console.log(this.cartForm.value)
  }

}
