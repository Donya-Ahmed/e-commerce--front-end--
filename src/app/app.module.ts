import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FormComponent } from './pages/register/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { CardComponent } from './shared/card/card.component';
import { SingleComponent } from './pages/single/single.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CategoryComponent } from './pages/category/category.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    SliderComponent,
    FormComponent,
    LoginComponent,
    CardComponent,
    SingleComponent,
    ShopComponent,
    CategoryComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
