import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { EstabelecimentoService } from '../estabelecimento.service';
import { ImagensEstabelcimentoService } from '../imagens-estabelcimento.service';
import { Estabelecimento } from '../inicio/inicio.component';
import { TagService } from '../tag.service';

// pro jquery
declare var $: any;

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent implements OnInit {
  
  public idCidade: any;
  public idEstabelecimento: any;
  
  private idSubscription: Subscription;

  public comentarios: SafeHtml;


  public estabelecimento: Estabelecimento;
  public imagens: Imagens[] = new Array<Imagens>();
  public tags: Tags[] = new Array<Tags>();

  // importo os serviços que fazem requisição no servidor, o route pra recuperar
  // o que vem na url, o DOM pra poder renderizar os comentários do facebook
  constructor(public route: ActivatedRoute, private sanitizer: DomSanitizer,
              private service_business: EstabelecimentoService,
              private service_images: ImagensEstabelcimentoService,
              private service_tags: TagService) { }

  ngOnInit(): void {
    // crio um novo estabelecimento
    this.estabelecimento = new Estabelecimento();

    // recupero o id da cidade e o id do estabelecimento que vieram na url
    this.idSubscription = this.route.params.subscribe((params: any) => {
      this.idEstabelecimento = params.id;
      this.idCidade = params.cidade;
      // console.log(this.idCidade);
      // console.log(this.idEstabelecimento);
    });

    // recupera as informações do estabelecimento informado
    this.service_business.getEstabelecimento(this.idEstabelecimento).subscribe(estabelecimento=> {
      this.estabelecimento = estabelecimento;
      console.log(this.estabelecimento);
    });

    // recupera as tags do estabelecimento informado
    this.service_tags.getTags(this.idEstabelecimento).subscribe(tags=> {
      this.tags = tags;
      console.log(this.tags);
    });

    // recupera as fotos do establecimento/produtos/serviços
    this.service_images.getImagens(this.idEstabelecimento).subscribe(imagens => {
      this.imagens = imagens;
      // console.log(this.imagens);
    });

    // alerta de gambiarra
    // renderiza os comentários do facebook pra url deste anuncio
    this.comentarios = this.sanitizer.bypassSecurityTrustHtml(
    "<div class='fb-comments' data-href='" + "http://localhost:4200/anuncios/cidades/" + this.idCidade + "/" +
     this.idEstabelecimento + "' data-width='400' data-numposts='10'></div>"
    );
    // pro materialize.css
    this.jquery_code();
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

  // materialize.css
  jquery_code(){
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.materialboxed').materialbox();
      $('.modal').modal();
    });
  }
}

// classe pra recuperar as imagens de um estabelecimento
export class Imagens{
  id: number;
  business: string;
  img: string;

  constructor(){
    this.img = "";
  }
}

// classe para tag de um negocio
export class Tags{
  id: number;
  business: number;
  name: string;

  constructor(){
    this.name = "";
  }
}