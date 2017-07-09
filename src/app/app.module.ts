import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TiltroComponent } from './portfolio/tiltro/tiltro.component';
import { SecondComponent } from './portfolio/second/second.component';
import { ThirdComponent } from './portfolio/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    PortfolioComponent,
    TiltroComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
