import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private contatos: Contato[]

  constructor() {
    this.contatos = []
  }

  existe(c: Contato): boolean {
    return false
  }

  adicionar(c: Contato): boolean {
    if (c != undefined) {
      this.contatos.push(c)
      return true
    }
    return false
  }

  obterTodos(): Contato[] {
    return this.contatos
  }

  obterQuantidade(): number {
    return this.contatos.length
  }
}
