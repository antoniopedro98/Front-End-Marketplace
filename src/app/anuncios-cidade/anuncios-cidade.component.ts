import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CidadeService } from '../cidade.service';
import { EstabelecimentoService } from '../estabelecimento.service';
import { CategoriasService } from '../categorias.service';
import { Cidades } from '../inicio/inicio.component';

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

  public todos_estabelecimentos:  Estabelecimentos[] = new Array<Estabelecimentos>();

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
  public atualizar_tabela(idCategoria: String): void{
    this.busca_estabelecimento = [];

    // se a categoria for 'geral', mostro todos os estabelecimentos da cidade
    if(idCategoria=="Geral"){
      this.busca_estabelecimento = this.todos_estabelecimentos;
    }else{
      // se não, eu filtro
      for(var i in this.categorias){
        // mesmo id de categoria
        if(idCategoria==this.todos_estabelecimentos[i].category){
          this.busca_estabelecimento.push(this.todos_estabelecimentos[i])
        }
      }
    }
    // console.log(this.busca_estabelecimento)
  }
}

// classe das categorias disponíveis pra filtragem
export class Categorias{
  id: string;
  name: string;

  constructor(){
    this.name="";
  }
}

// classe para os estabelecimentos
export class Estabelecimentos{
  id: string;
  delivery: boolean;
  withdraw: boolean;
  name: string;
  telephone: string;
  cell_phone: string;
  tags: null;
  time: number;
  description: string;
  city: string;
  logo: string;
  banner: string;
  neighborhood: string;
  category: string;

  constructor(){
    this.delivery = false;
    this.withdraw = false;
    this.name = "";
    this.telephone = "";
    this.cell_phone = "";
    this.tags = null;
    this.time = 0;
    this.description = "";
    this.logo = "";
    this.banner = "";
    this.neighborhood = "";
    this.category = "";
  }
}