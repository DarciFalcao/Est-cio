import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    {
      "codEditora": 1,
      "nome": "Astatton"
    },
    {
      "codEditora": 2,
      "nome": "Colleman"
    },
    {
      "codEditora": 3,
      "nome": "Falcão"
    }
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codEditora: number) {
    return this.editoras.filter((x) => x.codEditora == codEditora)[0].nome;        
  }
  
}
