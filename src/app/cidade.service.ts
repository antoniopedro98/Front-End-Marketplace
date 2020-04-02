import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidades } from './inicio/inicio.component';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  //o observable é uma classe no angular que permite que toda alteração no banco
  //se altere na nossa aplicação 

  // recupera uma cidade especifica
  getCidade(idCidade: string): Observable<Cidades>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Cidades>('http://localhost:8000/cities/' + idCidade + '/');
  }

  // recupera todas as cidades
  getCidades(): Observable<Cidades[]>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Cidades[]>('http://localhost:8000/cities/');
  }
}
