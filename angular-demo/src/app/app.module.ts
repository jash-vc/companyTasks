import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from '../../node_modules/ngx-slick-carousel';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    ContactUsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot([
      { path: 'contact-us', component: ContactUsComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
