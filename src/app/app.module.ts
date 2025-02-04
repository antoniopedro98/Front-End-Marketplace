import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AnunciosCidadeComponent } from './anuncios-cidade/anuncios-cidade.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { FormsModule } from '@angular/forms';
import { AnuncioPreviewComponent } from './anuncio-preview/anuncio-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AnunciosCidadeComponent,
    AnuncioComponent,
    AnuncioPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
