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
  getImagens(idBusiness: string): Observable<Imagens[]>{
    // retorna as cidades que eu tenho nessa url
    return this.http.get<Imagens[]>('http://localhost:8000/images/?business=' + idBusiness);
  }
}
