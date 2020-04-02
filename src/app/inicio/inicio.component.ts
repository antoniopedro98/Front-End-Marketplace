import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';
import { EstadosService } from '../estados.service';

// serve pra usar o jquery (nencessário no materialize.css)
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  // importo os serviços (fazem requisição no servidor)
  constructor(private service_city: CidadeService,
              private service_state: EstadosService) { }
  
  // guardo a lista de cidades
  public cidades:  Cidades[] = new Array<Cidades>();
  // guardo os estados cadastrados no servidor
  public estados: Estados[] = new Array<Estados>();

  ngOnInit(): void {
    // função pra executar os efeitos/animações do materialize.css
    this.jquery_code();
    
    // recupero todos os estados do servidor
    this.service_state.getEstados().subscribe(estados => {
      this.estados = estados;
      // console.log(this.estados);
    });

    // recupero todas as cidades do servidor
    this.service_city.getCidades().subscribe(cidades => {
      this.cidades = cidades;
      // console.log(this.cidades);
      // vou atualizar o campo estado da requisição nas cidades
      for(var i in this.cidades){
        for(var j in this.estados){
          // como a cidade so armazena um id do estado
          // eu faço a substituição do id do estado, pela inicial do estado
          if(this.cidades[i].state == this.estados[j].id){
            this.cidades[i].state = this.estados[j].initials;
            break;
          }
        }
      }
    });
  }

  // carrega os tweets do embed do twitter
  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }

  jquery_code(){
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.dropdown-trigger').dropdown({
        'hover': true,
        'coverTrigger': false,
        'alignment': 'top'
      });    
    });
  }
}

// classe Cidades
export class Cidades{
  // atributos devem ter o mesmo nome dos atributos que vem na resposta do servidor
  id: string;
  name: string;
  image: string;
  state: string;

  constructor(){
    this.name = "";
    this.image = "";
  }
}

// classe dos estados
export class Estados{
  id: string;
  name: string;
  initials: string;

  constructor(){
    this.name = "";
    this.initials = "";
  }
}