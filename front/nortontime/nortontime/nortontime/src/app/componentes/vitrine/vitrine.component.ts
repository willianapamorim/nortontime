import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {

  email: string = ''; // Propriedade para armazenar o valor do e-mail
  

  constructor(private _snackBar: MatSnackBar) {}

  // Método para exibir a mensagem de e-mail cadastrado

  exibirMensagem(event: Event) {
    event.preventDefault(); // Isso impede o comportamento padrão do botão
    this._snackBar.open('E-mail cadastrado em nossa newsletter!', 'Fechar', {
      duration: 5000,
    });

    this.email = ''; // Limpa o campo do e-mail

  }

  adicionarNoCarrinho(event: Event) {
    event.preventDefault(); // Isso impede o comportamento padrão do botão
    this._snackBar.open('Produto adicionado no carrinho.', 'Fechar', {
      duration: 5000, 
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      panelClass: ['centered-snackbar'], // Classe CSS para centralizar verticalmente
    });
  }
  
  pesquisar() {

    // Rola até a seção de produtos
    const element = document.getElementById('new-products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Limpa o formulário
    const searchForm = document.getElementById('search-form') as HTMLFormElement;
    if (searchForm) {
      searchForm.reset();
    }
  }

}
