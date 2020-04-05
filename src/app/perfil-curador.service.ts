import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilCurador } from './inicio/inicio.component';

@Injectable({
  providedIn: 'root'
})
export class PerfilCuradorService {

  constructor(private http: HttpClient) { }

  // recupera todos os perfis
  getPerfisCuradores(): Observable<PerfilCurador[]>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<PerfilCurador[]>('http://200.17.66.215/api/profiles/');
  }
}
