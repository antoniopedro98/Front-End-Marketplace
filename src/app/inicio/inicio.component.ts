import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';
import { EstadosService } from '../estados.service';
import { CuradoresService } from '../curadores.service';
import { PerfilCuradorService } from '../perfil-curador.service';
import { ReadKeyExpr } from '@angular/compiler';

// serve pra usar o jquery (nencessário no materialize.css)
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  // variavel pra validar se todos os services já estão disponíveis
  public contador: boolean = true;
  // guardo a lista de cidades
  public cidades:  Cidades[] = new Array<Cidades>();
  // guardo os estados cadastrados no servidor
  public estados: Estados[] = new Array<Estados>();
  // guardo todos os curadores cadastrados
  public curadores: Curadores[] = new Array<Curadores>();
  // guardo o perfil de todos os curadores
  public perfis: PerfilCurador[] = new Array<PerfilCurador>();

  // importo os serviços (fazem requisição no servidor)
  constructor(private service_city: CidadeService,
              private service_state: EstadosService,
              private service_curator: CuradoresService,
              private service_perfil_curator: PerfilCuradorService) { 
  }
  
  ngOnInit(): void {
    // // crio uma variavel pra armazenar os dados do cadastro
    // this.formularioCadastro = new NovoEstabelecimento();

    // recupero todos os estados do servidor
    this.service_state.getEstados().subscribe(estados => {
      this.estados = estados;
      // console.log(this.estados);
    });

    // recupero todas as cidades do servidor
    this.service_city.getCidades().subscribe(cidades => {
      this.cidades = cidades;  
      // console.log(this.cidades);
    });

    // recupero todos os perfis de curadores (cidade que um curador esta responsavel)
    this.service_perfil_curator.getPerfisCuradores().subscribe(perfis => {
      this.perfis = perfis;
      // console.log(this.perfis);
    });

    // recupero os curadores (nome e email e o id da cidade)
    this.service_curator.getCuradores().subscribe(curadores => {
      this.curadores = curadores;
      // console.log(this.curadores);
    });

    // função pra executar os efeitos/animações do materialize.css
    this.jquery_code();
  }
  
  // carrega os tweets do embed do twitter
  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }

  // gambiarra suprema
  match(valor: boolean){
    // console.log("valor>" + valor);
    // o valor retornado é igual true quer dizer que nem todos os arrays foram carregados 
    if(valor == true){
      if((this.cidades.length == 0) || (this.curadores.length == 0) ||
         (this.estados.length == 0) || (this.perfis.length ==0)) {
        // console.log("Não carregou tudo");
      }else{
        // se forem foram carregados, setamos a variavel que tem correspondencia com match no
        // html é setada false
        // console.log("Carregou tudo");
        // console.log(this.cidades);
        // console.log(this.estados);
        // console.log(this.curadores);
        // console.log(this.perfis);
        // faço o match do estado da cidade
        for(var i in this.cidades){
          for(var j in this.estados){
            // como a cidade so armazena um id do estado
            // eu faço a substituição do id do estado, pela inicial do estado
            if(this.cidades[i].state == this.estados[j].id){
              this.cidades[i].state_initials = this.estados[j].initials;
              // console.log("Iniciais " + this.cidades[i].state_initials)
              break;
            }
          }
        }

        // faço o match da cidade pro usuario
        for(var i in this.curadores){
          for(var j in this.perfis){
            // achamos o perfil de um curador
            if(this.curadores[i].id == this.perfis[j].user){
              for(var k in this.cidades){
                // achei a cidade do curador
                if(this.cidades[k].id == this.perfis[j].city){
                  this.curadores[i].city = this.cidades[k].name;
                  this.curadores[i].state_initials = this.cidades[k].state_initials;
                  break;
                }
              }
              break;
            }
          }
        }
        // nao vai mais entrar nessa função como um todo, pois essa variavel é a que chega
        // toda hora pelo parâmetro
        this.contador = false;
      }
    }
  }
  jquery_code(){
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.dropdown-trigger').dropdown({
        'coverTrigger': false,
        'alignment': 'top'
      });    
      $('.collapsible').collapsible();
      $('.modal').modal();
      $('.chips-placeholder').chips({
        placeholder: 'Digite uma tag',
        secondaryPlaceholder: '+Tag',
      });

    });
  }
}

// classe Cidades
export class Cidades{
  // atributos devem ter o mesmo nome dos atributos que vem na resposta do servidor
  id: number;
  name: string;
  image: string;
  state: number;
  state_initials: string;

  constructor(){
    this.name = "";
    this.image = "";
    this.state_initials = "";
  }
}

// classe dos estados
export class Estados{
  id: number;
  name: string;
  initials: string;

  constructor(){
    this.name = "";
    this.initials = "";
  }
}

// classe dos Curadores
export class Curadores{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  groups: null;
  city: string;
  state_initials: string;

  constructor(){
    this.first_name = "";
    this.last_name = "";
    this.email = "";
    this.city = "";
    this.state_initials="";
  }
}

// classe para os estabelecimentos ja cadastrados
export class Estabelecimento{
  id: number;
  delivery: boolean;
  withdraw: boolean;
  name: string;
  telephone: string;
  cell_phone: string;
  time: number;
  description: string;
  city: number;
  logo: string;
  banner: string;
  neighborhood: string;
  category: number;
  temp: boolean;
  approved: boolean;

  constructor(){
    this.delivery = false;
    this.withdraw = false;
    this.name = "";
    this.telephone = "";
    this.cell_phone = "";
    this.time = 0;
    this.description = "";
    this.logo = "";
    this.banner = "";
    this.neighborhood = "";
    this.temp = true;
    this.approved = false;
  }
}


export class PerfilCurador{
  user:number;
  city: number;

  constructor(){}
}