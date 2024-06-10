import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroNotaComponent } from './cadastro-nota/cadastro-nota.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';

// import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-nota', component: CadastroNotaComponent },
  { path: 'listar-alunos', component: ListarAlunosComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
