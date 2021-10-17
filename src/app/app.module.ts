import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Route } from '@angular/router';
import { NovitaComponent } from './components/novita/novita.component';
import { UomoComponent } from './components/uomo/uomo.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RatingComponent } from './components/rating/rating.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'detail/:id', component: ProductDetailComponent},
  {path: 'novita', component: NovitaComponent},
  {path: 'uomo', component: UomoComponent},
]

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NovitaComponent,
    UomoComponent,
    ProdottoComponent,
    RatingComponent,
    HistoryComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
  BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
