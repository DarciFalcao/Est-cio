import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros: Array<Livro> = [
    {
      "codigo": 1,
      "codEditora": 1,
      "titulo": "Front end",
      "resumo": "Aprendendo tudo que o front end pode oferecer",
      "autores": ["Dany Wadson", "Edward Monteiro"]
    },
    {
      "codigo": 2,
      "codEditora": 2,
      "titulo":  "Aprende a programar",
      "resumo": "Do inicio ao avançado para se tornar um programador",
      "autores": ["Vini Moraes", "Ros Teles"]
    },
    {
      "codigo": 3,
      "codEditora": 3,
      "titulo": "Falcão peregrino",
      "resumo": "Tudo sobre um Falcão",
      "autores": ["Falcão"],

    }
  ];

  obterLivros= ():Array<Livro> => this.livros;

  private getPos(codigo: number): number {
    for (let i = 0; i < this.livros.length; i++)
      if (codigo == this.livros[i].codigo)
        return i;
    return -1;
  }

  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    let pos = this.getPos(codigo);
    if (pos > -1)
      this.livros.splice(pos, 1);
  } 
   
}
