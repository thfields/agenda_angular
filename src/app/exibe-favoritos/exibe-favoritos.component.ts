import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrls: ['./exibe-favoritos.component.css']
})
export class ExibeFavoritosComponent {
 
  exibe: boolean = false;
  dataSource = new MatTableDataSource<any>([]); // Substitua 'any' pelo tipo real dos seus dados
  displayedColumns: string[] = ['nome', 'tel', 'aniversario', 'tipo', 'favorito'];

  constructor(public agenda: AgendaService) {
  }

  Exibefav(){
    this.exibe = !this.exibe; // Inverte o valor de exibe
    if (this.exibe) {
      this.dataSource.data = this.agenda.obterFavoritos();
    }
  }
}
