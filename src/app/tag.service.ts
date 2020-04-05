import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tags } from './anuncio/anuncio.component';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  // recupera um estabelecimento especifico
  getTags(idEstabelecimento: number): Observable<Tags[]>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Tags[]>('http://200.17.66.215/back/api/tags/?business=' + idEstabelecimento);
  }}
