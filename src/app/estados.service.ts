import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estados } from './inicio/inicio.component';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }

  // recupera todos os estados cadastrados
  getEstados(): Observable<Estados[]>{
    return this.http.get<Estados[]>('http://200.17.66.215/back/api/states/');
  }
}
