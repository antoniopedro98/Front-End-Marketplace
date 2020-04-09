import { Injectable } from '@angular/core';
import { Categorias } from './anuncios-cidade/anuncios-cidade.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  // recupera todas as categorias de negocios/serviços cadastradas
  getCategorias(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>('http://200.17.66.215/back/api/categories/');
  }
}
