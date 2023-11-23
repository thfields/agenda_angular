import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { ExibeContatosComponent } from './exibe-contatos/exibe-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent,
    ExibeContatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
