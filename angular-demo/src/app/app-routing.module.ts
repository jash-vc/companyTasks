import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingComponent } from './landing/landing.component'; 

const routes: Routes = [
  { 
    path: '',
    component: LandingComponent
  },
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
