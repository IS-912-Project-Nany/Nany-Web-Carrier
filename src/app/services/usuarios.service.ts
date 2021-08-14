import { API_BASE_URL } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  registrar(data: any): Observable<any> {
    return this.httpClient.post(`${API_BASE_URL}/usuarios`, data);
  }

  obtenerUsuario(idUsuario: String): Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/usuarios/${idUsuario}`);
  }
}
