import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AnunciosCidadeComponent } from './anuncios-cidade/anuncios-cidade.component';
import { AnuncioComponent } from './anuncio/anuncio.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'anuncios/cidades/:cidade', component: AnunciosCidadeComponent},
  {path: 'anuncios/cidades/:cidade/:id', component: AnuncioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
