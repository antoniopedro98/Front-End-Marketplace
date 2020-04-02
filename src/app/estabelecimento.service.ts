import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estabelecimentos } from './anuncios-cidade/anuncios-cidade.component';
// import { Estabelecimento } from './anuncio/anuncio.component';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient) { }

  // recupera um estabelecimento especifico
  getEstabelecimento(idEstabelecimento: string): Observable<Estabelecimentos>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Estabelecimentos>('http://localhost:8000/businesses/' + idEstabelecimento + '/');
  }

  // recupera todos os estabelecimentos de uma cidade
  getEstabelecimentos(idCidade: string): Observable<Estabelecimentos[]>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Estabelecimentos[]>('http://localhost:8000/businesses/?city=' + idCidade);
  }
}
