import { ThirdComponent } from './portfolio/third/third.component';
import { SecondComponent } from './portfolio/second/second.component';
import { TiltroComponent } from './portfolio/tiltro/tiltro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  { path: 'portfolio',  component: PortfolioComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'tiltro', component: TiltroComponent},
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThirdComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
