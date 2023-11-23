import { Component } from '@angular/core';
import { Contato, TipoContato } from '../contato';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  tipo: string[]
  constructor(private agenda: AgendaService) {
    this.tipo = Object.values(TipoContato) //['Amigo(a)','Trabalho', 'Família', 'Outro']
  }
  adicionar(nome: string, tel: string, tipo: string, ani: string) {
    let contato = new Contato(nome,  tel, this.converterContato(tipo), ani)
    this.agenda.adicionar(contato)
  } 
  converterContato(cont: string) {
    if (cont === 'Amigo(a)') return TipoContato.AMIGO
    else if (cont === 'Trabalho') return TipoContato.TRABALHO
    else if (cont === 'Família') return TipoContato.FAMILIA
    else if (cont === 'Outro') return TipoContato.OUTRO
    else return TipoContato.OUTRO
  }
}
