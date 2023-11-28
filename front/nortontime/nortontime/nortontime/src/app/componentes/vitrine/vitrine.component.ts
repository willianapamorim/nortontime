import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {

  email: string = ''; // Propriedade para armazenar o valor do e-mail

  constructor(private _snackBar: MatSnackBar) {}

  exibirMensagem(event: Event) {
    event.preventDefault(); // Isso impede o comportamento padrão do botão
    this._snackBar.open('E-mail cadastrado em nossa newsletter!', 'Fechar', {
      duration: 3000,
    });

    this.email = ''; // Limpa o campo do e-mail

  }

  

}
