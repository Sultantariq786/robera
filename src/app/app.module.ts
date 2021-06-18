import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { BottomfooterComponent } from './bottomfooter/bottomfooter.component';
import { WomenComponent } from './women/women.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'women', component: WomenComponent },
      { path: 'product', component: ProductComponent },
      { path: 'cart', component: CartComponent },
      { path: '**', component: HomepageComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    TopheaderComponent,
    BottomfooterComponent,
    WomenComponent,
    ProductComponent,
    CartComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
