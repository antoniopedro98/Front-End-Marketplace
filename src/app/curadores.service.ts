import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curadores } from './inicio/inicio.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuradoresService {

  constructor(private http: HttpClient) { }

  // recupera todos os curadores
  getCuradores(): Observable<Curadores[]>{
    // retorna os curadores que eu tenho nessa url
    return this.http.get<Curadores[]>('http://200.17.66.215/api/users/');
  }
}
