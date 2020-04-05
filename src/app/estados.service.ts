import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estados } from './inicio/inicio.component';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }

  // recupera todos os estados
  getEstados(): Observable<Estados[]>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Estados[]>('http://200.17.66.215/back/api/states/');
  }
}
