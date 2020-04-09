import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagens } from './anuncio/anuncio.component';

@Injectable({
  providedIn: 'root'
})
export class ImagensEstabelcimentoService {

  constructor(private http: HttpClient) { }

  // recupera todas as imagens de produtos/serviços de um estabelcimento
  getImagens(idBusiness: number): Observable<Imagens[]>{
    return this.http.get<Imagens[]>('http://200.17.66.215/back/api/images/?business=' + idBusiness);
  }
}
