import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContrastComponent } from './components/contrast/contrast.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DestaqueComponent,
    NewsletterComponent,
    CategoriesComponent,
    ContrastComponent,
    CarouselComponent,
    ProductsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
