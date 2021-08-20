import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle, faSignOutAlt, faClipboardList} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faSignOutAlt = faSignOutAlt;
  faClipboardList = faClipboardList;
  islogged: boolean = false;
  usuario: any = '';
  isLoading: boolean = false;

  constructor(
    private cookiesService: CookieService,
    private _route: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioId')) {
      this.islogged = true;
      this.usuario = {
        _id: this.cookiesService.get('nanyUsuarioId'),
        nombre: this.cookiesService.get('nanyUsuarioNombre'),
        apellido: this.cookiesService.get('nanyUsuarioApellido'),
      }
    }
  }

  logOut() {
    this.isLoading = true;
    this.cookiesService.delete('nanyUsuarioId');
    this.cookiesService.delete('nanyUsuarioNombre');
    this.cookiesService.delete('nanyUsuarioApellido');
    this.islogged = false;
    this.usuario = '';
    this.isLoading = false;
    this._route.navigate(['/']);
  }

}
