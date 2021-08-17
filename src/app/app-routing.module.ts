import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { RequisitosComponent } from "./requisitos/requisitos.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { DetalleOrdenComponent } from "./detalle-orden/detalle-orden.component";
import { HistorialOrdenesComponent } from "./historial-ordenes/historial-ordenes.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'Registro', component: RegisterComponent},
  {path: 'Inicio-sesion', component: LoginComponent},
  {path: 'Requisitos', component: RequisitosComponent},
  {path: 'Home', component: HomepageComponent},
  {path: 'Detalle-orden/:_id', component: DetalleOrdenComponent},
  {path: 'Historial-orden', component: HistorialOrdenesComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
