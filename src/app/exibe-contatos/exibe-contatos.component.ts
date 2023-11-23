import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrls: ['./exibe-contatos.component.css']
})
export class ExibeContatosComponent {

  exibe: boolean = false;
  dataSource = new MatTableDataSource<any>([]); // Substitua 'any' pelo tipo real dos seus dados
  displayedColumns: string[] = ['nome', 'tel', 'aniversario', 'tipo', 'favorito'];

  constructor(public agenda: AgendaService) {
  }

  Exibectt() {
    this.exibe = !this.exibe;
    if (this.exibe) {
      this.dataSource.data = this.agenda.obterTodos();
    }
  }
}
