import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { RequisitosComponent } from "./requisitos/requisitos.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { DetalleOrdenComponent } from "./detalle-orden/detalle-orden.component";
import { HistorialOrdenesComponent } from "./historial-ordenes/historial-ordenes.component";

const app_routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'Registro', component: RegisterComponent},
    {path: 'Inicio-sesion', component: LoginComponent},
    {path: 'Requisitos', component: RequisitosComponent},
    {path: 'Home', component: HomepageComponent},
    {path: 'Detalle-orden', component: DetalleOrdenComponent},
    {path: 'Historial-orden', component: HistorialOrdenesComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''},
];

export const app_routing = RouterModule.forRoot(app_routes); 