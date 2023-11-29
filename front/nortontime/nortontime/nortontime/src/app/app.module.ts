import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { EsquecisenhaComponent } from './componentes/esquecisenha/esquecisenha.component';
import { VitrineComponent } from './componentes/vitrine/vitrine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    CarrinhoComponent,
    EsquecisenhaComponent,
    VitrineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
