import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule para usar o two-way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroNotaComponent } from './cadastro-nota/cadastro-nota.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { NotificationComponent } from './notification/notification.component'; // Importe o HttpClientModule para fazer chamadas HTTP

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroNotaComponent,
    HomeComponent,
    ListarAlunosComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
