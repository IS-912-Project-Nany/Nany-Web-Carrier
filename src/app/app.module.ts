import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component';
import { HistorialOrdenesComponent } from './historial-ordenes/historial-ordenes.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    NavbarComponent,
    RequisitosComponent,
    HomepageComponent,
    DetalleOrdenComponent,
    HistorialOrdenesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule, 
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
