import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:any
  data:Product[]=[]
  isLoad:boolean=false


  constructor(private _auth:AuthService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.category=this._route.snapshot.params?.['category']
    this.showProductByCategory(this.category)

  }
  showProductByCategory(category:any){
    this._auth.showProductByCategory(category).subscribe((data)=>{this.data=data.data},
    (err)=>{console.log(err)},
    ()=>{ this.isLoad=true})
  }

}
