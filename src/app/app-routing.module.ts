import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"single/:id",component:SingleComponent},
  {path:"shop",component:ShopComponent},
  {path:"shop/:category",component:CategoryComponent},
  {path:"cart",component:CartComponent},
  {path:"profile",component:ProfileComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
