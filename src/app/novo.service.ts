import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoEstabelecimento } from './inicio/inicio.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovoService {

  constructor(private http: HttpClient) { }

  adicionar(novo: NovoEstabelecimento): Observable<any>{
    return this.http.post('http://200.17.66.215/t/', novo)
  }
}
