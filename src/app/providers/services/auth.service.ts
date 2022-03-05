import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin:boolean=false
  public user:any=null
public cart:any[]=[]
public cartId:any

// commenApiUrl=" https://final-nti.herokuapp.com/"
commenApiUrl="http://localhost:3000/"
  constructor(private _http:HttpClient) { }
  register(data:any):Observable<any>{
   return  this._http.post(`${this.commenApiUrl}api/user/register`,data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commenApiUrl}api/user/login`,data)

  }
  me():Observable<any>{
    return this._http.get(`${this.commenApiUrl}api/user/me`)

  }

  logout():Observable<any>{
    return this._http.get(`${this.commenApiUrl}api/user/logout`)

  }

  profileEdit(data:any):Observable<any>{
    return this._http.post(`${this.commenApiUrl}api/user/profile/edit`,data)

  }

//   route.get("/showProducts",userController.showProducts)
// route.get("/showProduct/:id",userController.showProduct)
// route.get("/showProductByCategory/:category",userController.showProductByCategory)
// route.get("/sortProducts",userController.sortProducts)
  showProducts():Observable<any>{
  return this._http.get(`${this.commenApiUrl}api/user/showProducts`)

   }
   showProduct(productId:number):Observable<any>{
  return this._http.get(`${this.commenApiUrl}api/user/showProduct/${productId}`)

   }
   showProductByCategory(productCat:string):Observable<any>{
  return this._http.get(`${this.commenApiUrl}api/user/showProductByCategory/${productCat}`)

}
sortProducts():Observable<any>{
  return this._http.get(`${this.commenApiUrl}api/user/sortProducts`)

}

//carts
createCart(data:any):Observable<any>{
  return this._http.post(`${this.commenApiUrl}api/cart/createCart`,data)

}
showUserCart():Observable<any>{
  return this._http.get(`${this.commenApiUrl}api/cart/showUserCart`)

}
delFromCart(cartId:any,productId:any):Observable<any>{
  return this._http.get(`${this.commenApiUrl}api/cart/delFromCart/${cartId}/${productId}`)

}


}
