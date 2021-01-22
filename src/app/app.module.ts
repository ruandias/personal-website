import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuemSouEuComponent } from './quem-sou-eu/quem-sou-eu.component';
import { ContatoComponent } from './contato/contato.component';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemSouEuComponent,
    ContatoComponent,
    RedesSociaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
