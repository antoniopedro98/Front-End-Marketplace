import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CidadeService } from '../cidade.service';
import { EstabelecimentoService } from '../estabelecimento.service';
import { CategoriasService } from '../categorias.service';
import { Cidades, Estabelecimento } from '../inicio/inicio.component';

declare var $: any;
@Component({
  selector: 'app-anuncios-cidade',
  templateUrl: './anuncios-cidade.component.html',
  styleUrls: ['./anuncios-cidade.component.scss']
})
export class AnunciosCidadeComponent implements OnInit {
  private idSubscription: Subscription;
  public idCidade: any;

  busca_estabelecimento = [];

  public cidade: Cidades;

  public todos_estabelecimentos:  Estabelecimento[] = new Array<Estabelecimento>();

  public categorias: Categorias[] = new Array<Categorias>();

  // importo os serviços pra requisitar o servidor, e o route pra recuperar o que vem na url
  constructor(public route: ActivatedRoute, private service_city: CidadeService,
              private service_business: EstabelecimentoService,
              private service_category: CategoriasService) { }

  ngOnInit(): void {
    // crio uma nova cidade
    this.idCidade = new Cidades();

    // recupero os parametros que estão vindo na url
    this.idSubscription = this.route.params.subscribe((params: any) => {
      this.idCidade = params.cidade;
    });

    // recupera as informações da cidade escolhida
    this.service_city.getCidade(this.idCidade).subscribe(cidade => {
      this.cidade = cidade;
      // console.log(this.cidade);
    });

    // todos os estabelecimentos da cidade
    this.service_category.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
      // console.log(this.categorias);
    });

    // todos os estabelecimentos da cidade
    this.service_business.getEstabelecimentos(this.idCidade).subscribe(todos_estabelecimentos => {
      this.todos_estabelecimentos = todos_estabelecimentos;
      this.busca_estabelecimento = this.todos_estabelecimentos;
      // console.log(this.todos_estabelecimentos);
    });

    // animações do materialize.css
    this.jquery_code();
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

  // função pro materialize.css funcionar
  jquery_code(){
    $(document).ready(function(){
      $('.parallax').parallax();   
      $('.tabs').tabs();
    });
  }

  // atualizo a tabela de acordo com os estabelecimentos que correspondem a categoria clicada
  public atualizar_tabela(idCategoria: any): void{
    this.busca_estabelecimento = [];
    console.log(idCategoria)

    // se a categoria for 'geral', mostro todos os estabelecimentos da cidade
    if(idCategoria=="Geral"){
      this.busca_estabelecimento = this.todos_estabelecimentos;
      // console.log(this.busca_estabelecimento)
    }else{
      // se não, eu filtro
      for(var i in this.todos_estabelecimentos){
        if(this.todos_estabelecimentos[i].category == idCategoria){
          this.busca_estabelecimento.push(this.todos_estabelecimentos[i])
        }
      }
      
    }
  }
}

// classe das categorias disponíveis pra filtragem
export class Categorias{
  id: number;
  name: string;

  constructor(){
    this.name="";
  }
}

