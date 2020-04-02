import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AnunciosCidadeComponent } from './anuncios-cidade/anuncios-cidade.component';
import { AnuncioComponent } from './anuncio/anuncio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AnunciosCidadeComponent,
    AnuncioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
