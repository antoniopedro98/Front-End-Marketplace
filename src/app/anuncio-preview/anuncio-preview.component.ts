import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Estabelecimento } from '../inicio/inicio.component';
import { ActivatedRoute } from '@angular/router';
import { EstabelecimentoService } from '../estabelecimento.service';
import { ImagensEstabelcimentoService } from '../imagens-estabelcimento.service';
import { TagService } from '../tag.service';
import { Imagens, Tags } from '../anuncio/anuncio.component';

declare var $: any;

@Component({
  selector: 'app-anuncio-preview',
  templateUrl: './anuncio-preview.component.html',
  styleUrls: ['./anuncio-preview.component.scss']
})
export class AnuncioPreviewComponent implements OnInit {

  public idCidade: any;
  public idEstabelecimento: any;
  
  private idSubscription: Subscription;

  public estabelecimento: Estabelecimento;
  public imagens: Imagens[] = new Array<Imagens>();
  public tags: Tags[] = new Array<Tags>();

  // importo os serviços que fazem requisição no servidor, o route pra recuperar
  // o que vem na url, o DOM pra poder renderizar os comentários do facebook
  constructor(public route: ActivatedRoute,
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
      // console.log(this.estabelecimento);
    });

    // recupera as tags do estabelecimento informado
    this.service_tags.getTags(this.idEstabelecimento).subscribe(tags=> {
      this.tags = tags;
      // console.log(this.tags);
    });

    // recupera as fotos do establecimento/produtos/serviços
    this.service_images.getImagens(this.idEstabelecimento).subscribe(imagens => {
      this.imagens = imagens;
      // console.log(this.imagens);
    });

    // pro materialize.css
    this.jquery_code();
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

  // materialize.css
  jquery_code(){
    $(document).ready(function(){
      $('.materialboxed').materialbox();
      $('.modal').modal();
      $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
    });
  }
}
