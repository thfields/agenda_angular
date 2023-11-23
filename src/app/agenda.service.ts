import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private contatos: Contato[]
  private favoritos: Contato[]

  constructor() {
    this.contatos = []
    this.favoritos = []
  }

  existe(ct: Contato) {
    let verifica = 0
    for (var x = 0; x < this.contatos.length; x++) {
      if (this.contatos[x].nome == ct.nome && this.contatos[x].tel == ct.tel) {
        alert(`repetido`)
        verifica = 1
      }
    }
    return verifica
  }

  adicionar(c: Contato){
    if (c != undefined && this.existe(c) == 0){
      this.contatos.push(c)
      if(c.favorito == true){
        this.favoritos.push(c)
      }
    }
    return false
  }

  obterTodos(): Contato[] {
    return this.contatos
  }

  obterQuantidade(): number {
    return this.contatos.length
  }

  obterFavoritos(): Contato[] {
    return this.favoritos
  }

  obterQuantidadeFav(): number {
    return this.favoritos.length
  }

  
}
