import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curadores } from './inicio/inicio.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuradoresService {

  constructor(private http: HttpClient) { }

  // recupera todos os curadores (nome e email)
  getCuradores(): Observable<Curadores[]>{
    return this.http.get<Curadores[]>('http://200.17.66.215/back/api/users/');
  }
}
