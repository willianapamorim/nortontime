import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { EsquecisenhaComponent } from './componentes/esquecisenha/esquecisenha.component';
import { VitrineComponent } from './componentes/vitrine/vitrine.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent}
  ,{path: 'cadastro', component:CadastroComponent}
  ,{path: 'carrinho', component:CarrinhoComponent}
  ,{path: 'esquecisenha', component:EsquecisenhaComponent}
  ,{path: 'vitrine', component:VitrineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
