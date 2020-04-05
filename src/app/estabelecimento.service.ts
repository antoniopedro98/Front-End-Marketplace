import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estabelecimento } from './inicio/inicio.component';
// import { Estabelecimento } from './anuncio/anuncio.component';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient) { }

  // recupera um estabelecimento especifico
  getEstabelecimento(idEstabelecimento: number): Observable<Estabelecimento>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Estabelecimento>('http://200.17.66.215/api/businesses/' + idEstabelecimento + "/");
  }

  // recupera todos os estabelecimentos de uma cidade
  getEstabelecimentos(idCidade: number): Observable<Estabelecimento[]>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Estabelecimento[]>('http://200.17.66.215/api/businesses/?city=' + idCidade );
  }
}
