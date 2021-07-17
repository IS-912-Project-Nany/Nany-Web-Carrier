import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_routing } from './app.routers';

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
    HistorialOrdenesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
