import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilCurador } from './inicio/inicio.component';

@Injectable({
  providedIn: 'root'
})
export class PerfilCuradorService {

  constructor(private http: HttpClient) { }

  // recupera todos os perfis de curadores (que tem info das cidades que eles são reponsaveis)
  getPerfisCuradores(): Observable<PerfilCurador[]>{
    return this.http.get<PerfilCurador[]>('http://200.17.66.215/back/api/profiles/');
  }
}
